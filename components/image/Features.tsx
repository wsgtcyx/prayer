// app/components/image/Features.tsx

import { FaCloudUploadAlt, FaImage, FaLayerGroup, FaPaintBrush, FaRegSmileBeam, FaShareAlt } from 'react-icons/fa';

const featureItems = [
  { icon: FaPaintBrush, title: 'Customizable Designs', description: 'Easily customize the design and layout of the Bible verses on your images.' },
  { icon: FaShareAlt, title: 'Easy Social Sharing', description: 'Share your created images effortlessly on social media platforms.' },
  { icon: FaCloudUploadAlt, title: 'High-Quality Downloads', description: 'Download high-resolution images for printing or digital use.' },
  { icon: FaRegSmileBeam, title: 'Inspiration at Your Fingertips', description: 'Generate daily inspirational images to keep you motivated.' },
  { icon: FaImage, title: 'Beautiful Backgrounds', description: 'Choose from a variety of stunning background images for your verses.' },
  { icon: FaLayerGroup, title: 'Layered Text Options', description: 'Add multiple layers of text to create rich and engaging images.' },
];

const Features: React.FC = () => (
  <div className="w-full max-w-7xl p-6 bg-white dark:bg-gray-800 rounded shadow mb-8">
    <h2 className="text-xl font-bold mb-4 text-center">Key Features</h2>
    <p className="mb-4 text-center">Explore the powerful features of the Bible Verse Image Creator:</p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {featureItems.map((item, index) => (
        <div key={index} className="flex flex-col items-center p-6 bg-gray-100 dark:bg-gray-700 rounded shadow">
          <item.icon className="text-4xl mb-4 text-blue-500" />
          <h3 className="text-lg font-bold mb-2">{item.title}</h3>
          <p className="text-center">{item.description}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Features;
