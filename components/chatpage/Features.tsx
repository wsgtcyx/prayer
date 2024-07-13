import { FaClock, FaHandsHelping, FaHeart, FaLightbulb, FaPenFancy, FaPrayingHands } from 'react-icons/fa';

const featureItems = [
  { icon: FaPrayingHands, title: 'Personalized Prayers', description: 'Generate personalized prayers tailored to your specific needs.' },
  { icon: FaHeart, title: 'Free and Accessible', description: 'Enjoy our service at no cost, making personalized prayers accessible to everyone, anytime.' },
  { icon: FaClock, title: 'Quick and Easy', description: 'Generate heartfelt prayers in seconds with our user-friendly interface.' },
  { icon: FaPenFancy, title: 'Customizable Content', description: 'Modify your prayers to include specific words, tones, and styles.' },
  { icon: FaHandsHelping, title: 'Supportive and Compassionate', description: 'Find comfort and peace with prayers designed to support and uplift you.' },
  { icon: FaLightbulb, title: 'Guided Spirituality', description: 'Receive spiritual guidance and inspiration through curated prayer suggestions and articles.' },
];

const Features = () => (
  <div className="w-full max-w-5xl p-6 bg-white dark:bg-gray-800 rounded shadow mb-8">
    <h2 className="text-3xl font-bold mb-4 text-center">Key Features</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {featureItems.map((item, index) => (
        <div key={index} className="flex flex-col items-center p-4 bg-gray-100 dark:bg-gray-700 rounded shadow">
          <item.icon className="text-3xl mb-2 text-blue-500 dark:text-blue-400" />
          <h3 className="text-lg font-bold mb-2 text-gray-800 dark:text-gray-200">{item.title}</h3>
          <p className="text-center text-gray-600 dark:text-gray-300">{item.description}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Features;
