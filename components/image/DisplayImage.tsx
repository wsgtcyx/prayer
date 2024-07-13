// app/components/image/DisplayImage.tsx
import Image from 'next/image';

interface DisplayImageProps {
  src: string;
}

export default function DisplayImage({ src }: DisplayImageProps) {
  return (
    <div className="mt-4 w-full max-w-7xl mx-auto">
      <h2 className="text-xl font-bold mb-2 text-center">Generated Image</h2>
      <Image src={src} alt="Generated" layout="responsive" width={1200} height={800} className="w-full h-auto" />
    </div>
  );
}
