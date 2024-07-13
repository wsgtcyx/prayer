// app/components/home/OurService.tsx

import { RoughNotation } from "react-rough-notation";

import { FaComments, FaImages } from 'react-icons/fa';
const services = [
  {
    icon: FaComments,
    title: 'Personalized Prayer Generation',
    description: 'Create heartfelt and personalized prayers tailored to your specific needs with the help of our AI.',
    keywords: 'personalized prayers, custom prayers, prayer generator, prayer for healing, prayer for peace, prayer for strength',
    link: '/prayer',
    CTA: 'Create Your Prayer',
  },
  {
    icon: FaImages,
    title: 'Prayer Writing Guides and Tips',
    description: 'Explore our comprehensive guides and tips on how to write meaningful and effective prayers.',
    keywords: 'how to write a prayer, prayer writing tips, effective prayers, prayer examples, prayer resources',
    link: '/post',
    CTA: 'Read Our Posts',
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
        </div>
      ))}
    </div>
  </div>
);

export default OurService;
