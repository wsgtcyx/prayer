// app/image/page.tsx

'use client';

import { versifiedImageRequest, versifiedImageResponse } from '@/app/api/add-verses-to-image/route';
import DisplayImage from '@/components/image/DisplayImage';
import FAQ from '@/components/image/FAQ';
import Features from '@/components/image/Features';
import Hero from '@/components/image/Hero';
import InputForm from '@/components/image/InputForm';
import Tips from '@/components/image/Tips';
import UseCases from '@/components/image/UserCases';
import { useState } from 'react';

export default function ImagePage() {
  const [verse, setVerse] = useState<string>('');
  const [image, setImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (inputVerse: string) => {
    if (verse.length > 200) {
      alert('Verses is too long. Please enter less than 200 characters.');
      return;
    } else if (verse.length < 1) {
      alert('Verses is too short. Please enter at least 1 character.');
      return;
    }
    setIsLoading(true);
    setVerse(inputVerse);

    try {
      // Step 1: Get a photo from Unsplash
      const photoResponse = await fetch('/api/get-photo-unsplash', {
        method: 'POST',
        cache: 'no-cache',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!photoResponse.ok) {
        throw new Error('Failed to fetch photo from Unsplash');
      }

      const photoData = await photoResponse.json();
      const imageSrc = photoData.url;

      // Step 2: Add the verse to the image
      const versifiedImageRequest: versifiedImageRequest = { imageSrc, verse: inputVerse };
      const imageResponse = await fetch('/api/add-verses-to-image', {
        method: 'POST',
        cache: 'no-cache',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(versifiedImageRequest),
      });

      if (!imageResponse.ok) {
        throw new Error('Failed to add verse to image');
      }

      const imageData: versifiedImageResponse = await imageResponse.json();
      setImage(imageData.image);
    } catch (error) {
      console.error('Error generating image:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 dark:bg-gray-900">
      <Hero />
      <InputForm onSubmit={handleSubmit} isLoading={isLoading} />
      {image && <DisplayImage src={image} />}
      <Tips />
      <UseCases />
      <Features />
      <FAQ />
    </div>
  );
}
