// app/components/image/UseCases.tsx

import { FaBookOpen, FaBrain, FaMicrophone, FaPrayingHands, FaSave, FaSearch, FaShareAlt, FaSun } from 'react-icons/fa';

const useCaseItems = [
  {
    icon: FaBookOpen,
    title: 'Personal Reflection',
    description: 'Create images with Bible verses for personal reflection and inspiration.',
    example: 'Example: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life." - John 3:16',
  },
  {
    icon: FaMicrophone,
    title: 'Sermon Prep',
    description: 'Design visual aids for your sermons and Bible study materials with impactful verses.',
    example: 'Example: "Love your neighbor as yourself." - Matthew 22:39',
  },
  {
    icon: FaSun,
    title: 'Daily Inspiration',
    description: 'Generate daily inspirational images to share on social media or keep for personal motivation.',
    example: 'Example: "The Lord is my shepherd; I shall not want." - Psalm 23:1',
  },
  {
    icon: FaPrayingHands,
    title: 'Prayer Guidance',
    description: 'Create images with verses to guide and enhance your prayer life.',
    example: 'Example: "I can do all this through him who gives me strength." - Philippians 4:13',
  },
  {
    icon: FaBrain,
    title: 'Memorization Aid',
    description: 'Design images to help memorize Bible verses effectively and visually.',
    example: 'Example: "Trust in the Lord with all your heart and lean not on your own understanding." - Proverbs 3:5-6',
  },
  {
    icon: FaSearch,
    title: 'Thematic Study',
    description: 'Generate themed images for deeper study and understanding of specific topics.',
    example: 'Example: "Be kind and compassionate to one another, forgiving each other, just as in Christ God forgave you." - Ephesians 4:32',
  },
  {
    icon: FaShareAlt,
    title: 'Social Sharing',
    description: 'Create shareable Bible verse images to inspire and encourage your social media followers.',
    example: 'Example: "Peace I leave with you; my peace I give you. I do not give to you as the world gives. Do not let your hearts be troubled and do not be afraid." - John 14:27',
  },
  {
    icon: FaSave,
    title: 'Personal Keepsake',
    description: 'Design and save beautiful images with meaningful verses for personal keepsakes.',
    example: 'Example: "For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future." - Jeremiah 29:11',
  },
];

const UseCases: React.FC = () => (
  <div className="w-full max-w-7xl p-6 bg-white dark:bg-gray-800 rounded shadow mb-8">
    <h2 className="text-xl font-bold mb-4 text-center">Use Cases</h2>
    <p className="mb-4 text-center">Discover how Bible Verse Image Creator can help you in various situations:</p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {useCaseItems.map((item, index) => (
        <div key={index} className="flex flex-col items-center p-6 bg-gray-100 dark:bg-gray-700 rounded shadow">
          <item.icon className="text-4xl mb-4 text-blue-500" />
          <h3 className="text-lg font-bold mb-2">{item.title}</h3>
          <p className="text-center mb-2">{item.description}</p>
          <p className="text-sm text-gray-600 dark:text-gray-300">{item.example}</p>
        </div>
      ))}
    </div>
  </div>
);

export default UseCases;
