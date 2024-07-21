// app/components/chat/Tips.tsx

import React from 'react';
import { FaEdit, FaHeart, FaKeyboard } from 'react-icons/fa';

const tipsData = [
  {
    icon: FaKeyboard,
    title: "Step 1: Start with Keywords",
    content: "Type in the keywords for the prayer you need. For example, you could enter 'prayer for healing' or 'prayer for peace.'",
  },
  {
    icon: FaEdit,
    title: "Step 2: Adjust Your Prayer",
    content: "After the AI generates a prayer, you can make specific requests to adjust it. Modify the length, add descriptive words, specify the religion, adjust the tone, or change any other aspects.",
  },
  {
    icon: FaHeart,
    title: "Step 3: Refine for Perfection",
    content: "Refine your prayer until it perfectly meets your needs and brings you comfort and inspiration.",
  }
];

const Tips: React.FC = () => {
  return (
    <div className="w-full max-w-5xl top-2 p-10 bg-blue-100 dark:bg-blue-800 rounded-xl shadow mb-8 mt-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Tips</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tipsData.map((tip, index) => (
          <div key={index} className="flex flex-col items-center p-6 bg-white dark:bg-gray-700 rounded-xl shadow">
            <tip.icon className="text-3xl mb-4 text-blue-500" />
            <h3 className="text-xl font-semibold mb-2 text-center">{tip.title}</h3>
            <p className="text-center">{tip.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tips;
