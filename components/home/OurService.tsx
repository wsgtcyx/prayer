// app/components/home/OurService.tsx

import { FaComments, FaImages } from 'react-icons/fa';
import { RoughNotation } from "react-rough-notation";


const services = [
  {
    icon: FaComments,
    title: 'Chat for Bible Verse Insights',
    description: 'Get accurate Bible verses, explanations, and related stories by chatting with our AI.',
    keywords: 'bible verses about hope in hard times, bible verses about trusting god, bible verses about sadness, encouraging bible verses',
    link: '/chat',
    CTA: 'Get Your Verses',
    imageUrl: 'https://fa38e54.webp.li/2024/07/965084133eb8acb4a7420de2f9e5bce9.png'
  },
  {
    icon: FaImages,
    title: 'Generate Bible Verse Images',
    description: 'Create beautiful images with Bible verses overlaid on stunning nature backgrounds.',
    keywords: 'bible verse wallpaper, bible verse backgrounds, bible verses about strength in hard times, bible verse generator',
    link: '/image',
    CTA: 'Create Your Verses Image',
    imageUrl: 'https://fa38e54.webp.li/2024/07/649fed47fc8356c4f56535e495611133.png'
  },
];

const OurService: React.FC = () => (
  <div className="w-full max-w-7xl mx-auto p-6 bg-white dark:bg-gray-800 rounded shadow mb-8">
    <h2 className="text-center text-white">
      <RoughNotation type="highlight" show={true} color="#2563EB">
        Our Services
      </RoughNotation>
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {services.map((service, index) => (
        <div key={index} className="flex flex-col items-center p-4 bg-gray-100 dark:bg-gray-700 rounded shadow">
          <service.icon className="text-4xl mb-2 text-blue-500" />
          <h3 className="text-xl font-bold mb-2 text-blue-600 dark:text-blue-300">{service.title}</h3>
          <p className="text-center mb-4">{service.description}</p>
          <p className="text-center text-sm mt-2 text-gray-600 dark:text-gray-300">{service.keywords}</p>
          <a href={service.link} target="_blank" rel="noopener noreferrer" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded shadow">
            {service.CTA}
          </a>
          <div className="mt-4 border-4 border-gray-300 dark:border-gray-600 rounded overflow-hidden" style={{ maxWidth: '500px' }}>
            <img src={service.imageUrl} alt={service.title} className="w-full h-auto" />
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default OurService;
