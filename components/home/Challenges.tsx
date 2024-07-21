import { FaExclamationCircle, FaQuestionCircle, FaTimesCircle } from 'react-icons/fa';
import { RoughNotation } from "react-rough-notation";

const challengeItems = [
  {
    icon: FaExclamationCircle,
    title: 'Difficulty Finding the Right Words',
    description: 'When emotions run high, it can be hard to find the right words to express your prayers.'
  },
  {
    icon: FaQuestionCircle,
    title: 'Need for Guidance and Comfort',
    description: 'Sometimes, we all need a little help to find the comfort and guidance in our prayers.'
  },
  {
    icon: FaTimesCircle,
    title: 'Limited Time and Focus',
    description: 'Life’s demands can make it hard to focus on crafting a heartfelt prayer.'
  },
  {
    icon: FaExclamationCircle,
    title: 'Inconsistent Prayer Styles',
    description: 'Finding a consistent and heartfelt way to pray can be challenging with so many different styles available.'
  },
  {
    icon: FaQuestionCircle,
    title: 'Personal Touch Missing',
    description: 'Generic prayers often lack the personal touch that makes them truly meaningful.'
  },
  {
    icon: FaTimesCircle,
    title: 'Overwhelmed by Choices',
    description: 'With so many prayer templates out there, it can be overwhelming to choose the right one.'
  },
];

const Challenges = () => (
  <div className="pt-20 flex flex-col justify-center lg:max-w-7xl md:max-w-5xl w-[95%] mx-auto md:gap-14 py-6 rounded-xl">
    <h2 className="text-center text-white">
      <RoughNotation type="highlight" show={true} color="#2563EB">
        Challenges
      </RoughNotation>
    </h2>
    <p className="text-center text-large text-default-500">Discover the common struggles people face when seeking to create heartfelt prayers and how we can help overcome them:</p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {challengeItems.map((item, index) => (
        <div key={index} className="flex flex-col items-center p-4 bg-gray-100 dark:bg-gray-700 rounded-xl shadow">
          <item.icon className="text-3xl mb-2 text-blue-500" />
          <h3 className="text-lg font-bold mb-2">{item.title}</h3>
          <p className="text-center">{item.description}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Challenges;
