import { FaBible, FaBookOpen, FaBrain, FaExchangeAlt, FaHeart, FaMicrophone, FaPrayingHands, FaQuestionCircle, FaSearch, FaSun, FaUsers } from 'react-icons/fa';

const useCaseItems = [
  {
    icon: FaBookOpen,
    color: 'text-blue-500',
    title: 'Personal Study',
    description: 'Find relevant verses to deepen your personal Bible study and devotional time.',
    example: 'Example: "Give me Bible verses about strength in hard times."'
  },
  {
    icon: FaMicrophone,
    color: 'text-green-500',
    title: 'Sermon Prep',
    description: 'Easily locate verses to include in your sermon or Bible study materials.',
    example: 'Example: "I need Bible verses for a funeral service."'
  },
  {
    icon: FaSun,
    color: 'text-yellow-500',
    title: 'Daily Inspiration',
    description: 'Get a fresh Bible verse each day to encourage and motivate you.',
    example: 'Example: "Give me a daily Bible verse."'
  },
  {
    icon: FaQuestionCircle,
    color: 'text-purple-500',
    title: 'Get Explanations',
    description: 'Understand specific verses with detailed explanations and insights.',
    example: 'Example: "What does John 3:16 mean?"'
  },
  {
    icon: FaPrayingHands,
    color: 'text-orange-500',
    title: 'Prayer Suggestions',
    description: 'Receive tailored prayers and Bible verses for guidance and comfort.',
    example: 'Example: "Prayer suggestions for strength."'
  },
  {
    icon: FaBrain,
    color: 'text-pink-500',
    title: 'Memorize Verses',
    description: 'Get tips and techniques for memorizing Bible verses effectively.',
    example: 'Example: "Help me memorize Philippians 4:13."'
  },
  {
    icon: FaSearch,
    color: 'text-teal-500',
    title: 'Topic-Based Study',
    description: 'For deeper study on a topic, ask for related verses and explanations.',
    example: 'Example: "Bible verses about forgiveness."'
  },
  {
    icon: FaExchangeAlt,
    color: 'text-indigo-500',
    title: 'Comparing Versions',
    description: 'Compare how different Bible versions translate a verse side by side.',
    example: 'Example: "Compare John 3:16 in NIV and KJV."'
  },
  {
    icon: FaHeart,
    color: 'text-red-500',
    title: 'Verses About Love',
    description: 'Find Bible verses that speak about love and compassion.',
    example: 'Example: "Bible verses about love for women."'
  },
  {
    icon: FaBible,
    color: 'text-blue-700',
    title: 'Verse Backgrounds',
    description: 'Get beautiful Bible verse wallpapers and backgrounds.',
    example: 'Example: "Give me Bible verse wallpapers."'
  },
  {
    icon: FaUsers,
    color: 'text-green-700',
    title: 'Community Support',
    description: 'Find verses for supporting and encouraging your community.',
    example: 'Example: "Bible verses for encouraging others."'
  },
];

const UseCases = () => (
  <div className="w-full max-w-4xl p-6 bg-white dark:bg-gray-800 rounded shadow mb-8">
    <h2 className="text-2xl font-bold text-center mb-4">Use Cases</h2>
    <p className="text-center mb-4">Discover how Bible Verses AI can help you in various situations:</p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {useCaseItems.map((item, index) => (
        <div key={index} className="flex flex-col items-center p-6 bg-gray-100 dark:bg-gray-700 rounded shadow">
          <item.icon className={`text-4xl mb-2 ${item.color}`} />
          <h3 className="text-lg font-bold mb-2">{item.title}</h3>
          <p className="text-center mb-2">{item.description}</p>
          <p className="text-center italic">{item.example}</p>
        </div>
      ))}
    </div>
  </div>
);

export default UseCases;
