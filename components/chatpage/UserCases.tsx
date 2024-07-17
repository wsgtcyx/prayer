import { FaChild, FaCross, FaHandsHelping, FaHeart, FaLightbulb, FaPeace, FaPrayingHands, FaUser, FaUsers } from 'react-icons/fa';

const useCaseItems = [
  {
    icon: FaPrayingHands,
    color: 'text-blue-500',
    title: 'Prayer for Healing',
    description: 'Find personalized prayers for healing for yourself or a loved one.',
    example: 'Example: "Prayer for healing for a friend."'
  },
  {
    icon: FaHeart,
    color: 'text-red-500',
    title: 'Prayer for Peace',
    description: 'Discover prayers that bring peace and calm to your heart and mind.',
    example: 'Example: "Prayer for peace of mind."'
  },
  {
    icon: FaHandsHelping,
    color: 'text-green-500',
    title: 'Prayer for Guidance',
    description: 'Get prayers for guidance in making important decisions or facing challenges.',
    example: 'Example: "Prayer for guidance in difficult times."'
  },
  {
    icon: FaCross,
    color: 'text-purple-500',
    title: 'Daily Prayer',
    description: 'Receive daily prayers to inspire and uplift you every day.',
    example: 'Example: "Give me a daily prayer."'
  },
  {
    icon: FaUser,
    color: 'text-orange-500',
    title: 'Prayer for Protection',
    description: 'Find prayers for protection and safety for yourself and your loved ones.',
    example: 'Example: "Prayer for protection against evil."'
  },
  {
    icon: FaChild,
    color: 'text-yellow-500',
    title: 'Prayer for Children',
    description: 'Get prayers for the well-being and guidance of your children.',
    example: 'Example: "Prayer for my son."'
  },
  {
    icon: FaUsers,
    color: 'text-teal-500',
    title: 'Community Prayer',
    description: 'Find prayers to support and encourage your community.',
    example: 'Example: "Prayer for my community."'
  },
  {
    icon: FaPeace,
    color: 'text-indigo-500',
    title: 'Prayer for Serenity',
    description: 'Receive prayers to help you find serenity and calm in your life.',
    example: 'Example: "God grant me the serenity prayer."'
  },
  {
    icon: FaLightbulb,
    color: 'text-pink-500',
    title: 'Prayer for Inspiration',
    description: 'Discover prayers that provide inspiration and uplift your spirit.',
    example: 'Example: "Prayer for inspiration and creativity."'
  },
];

const UseCases = () => (
  <div className="w-full max-w-5xl p-6 bg-white dark:bg-gray-800 rounded shadow mb-8">
    <h2 className="text-2xl font-bold text-center mb-4">Use Cases</h2>
    <p className="text-center mb-4">Discover how PrayerAI can help you in various situations:</p>
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
