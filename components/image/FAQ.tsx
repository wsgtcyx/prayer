// app/components/image/FAQ.tsx

import React from 'react';

const faqItems = [
  {
    question: 'What is Bible Verse Image Creator?',
    answer: 'Bible Verse Image Creator is an online tool that helps you generate inspirational images with Bible verses. Simply enter a verse, and our tool will create a beautiful image with the verse overlaid on a nature background.',
  },
  {
    question: 'How do I use Bible Verse Image Creator?',
    answer: 'To use Bible Verse Image Creator, enter your desired Bible verse into the input form and click "Submit." Our tool will fetch a background image and overlay the verse onto it, creating a shareable image.',
  },
  {
    question: 'Can I choose the background image?',
    answer: 'Currently, Bible Verse Image Creator selects a background image for you from a curated collection. We are working on adding more customization options in the future.',
  },
  {
    question: 'Is Bible Verse Image Creator free to use?',
    answer: (
      <>
        Yes, Bible Verse Image Creator is completely free to use. You can generate as many images as you like and share them with your friends and family. If you want to thank the creator, feel free to buy a coffee at this link: {' '}
        <a
          href="https://yxstore.lemonsqueezy.com/buy/af8de04f-8f1c-48d4-bbb2-8318a1f0d450"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          Buy me a coffee
        </a>
        .
      </>
    ),
  },
  {
    question: 'Can I request new features?',
    answer: 'Absolutely! We are always looking to improve Bible Verse Image Creator. If you have any suggestions or feature requests, please contact us.',
  },
];

const FAQ: React.FC = () => (
  <div className="w-full max-w-4xl p-6 bg-white dark:bg-gray-800 rounded shadow mb-8">
    <h2 className="text-xl font-bold mb-4 text-center">Frequently Asked Questions</h2>
    <div className="space-y-4">
      {faqItems.map((item, index) => (
        <div key={index} className="p-4 bg-gray-100 dark:bg-gray-700 rounded shadow">
          <h3 className="text-lg font-bold mb-2">{item.question}</h3>
          <p>{item.answer}</p>
        </div>
      ))}
    </div>
  </div>
);

export default FAQ;
