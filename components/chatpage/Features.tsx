import { FaBible, FaBookOpen, FaCog, FaRegLightbulb, FaSearch, FaUserShield } from 'react-icons/fa';

const featureItems = [
  { icon: FaBible, title: 'Accurate Bible Verses', description: 'Find the most relevant and accurate Bible verses for any topic or question.' },
  { icon: FaRegLightbulb, title: 'Expert Explanations', description: 'Get detailed explanations and interpretations of Bible verses.' },
  { icon: FaCog, title: 'User-Friendly Interface', description: 'Enjoy a seamless and intuitive experience across all devices.' },
  { icon: FaSearch, title: 'Advanced Search', description: 'Easily search for Bible verses and topics.' },
  { icon: FaUserShield, title: 'Spiritual Guidance', description: 'Receive guidance and inspiration through curated Bible verses.' },
  { icon: FaBookOpen, title: 'Multi-Intent Satisfaction', description: 'Meet diverse user needs by understanding and addressing various intents such as study, meditation, and application.' },
];

const Features = () => (
  <div className="w-full max-w-4xl p-6 bg-white dark:bg-gray-800 rounded shadow mb-8">
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
