import { FaExclamationCircle, FaQuestionCircle, FaTimesCircle } from 'react-icons/fa';
import { RoughNotation } from "react-rough-notation";

const challengeItems = [
  {
    icon: FaExclamationCircle,
    title: 'Difficulty Finding Relevant Verses',
    description: 'Many users struggle to find the exact Bible verses that address their specific needs or questions.'
  },
  {
    icon: FaQuestionCircle,
    title: 'Lack of Context and Explanations',
    description: 'Understanding the context and deeper meaning of Bible verses can be challenging without proper guidance.'
  },
  {
    icon: FaTimesCircle,
    title: 'Time-Consuming Search',
    description: 'Searching through the Bible for specific verses or topics can be a time-consuming process.'
  },
  {
    icon: FaExclamationCircle,
    title: 'Inconsistent Interpretations',
    description: 'Different sources provide varying interpretations, making it hard to find reliable and consistent explanations.'
  },
  {
    icon: FaQuestionCircle,
    title: 'Lack of Personalized Guidance',
    description: 'Finding personalized spiritual guidance and relevant verses tailored to individual needs can be difficult.'
  },
  {
    icon: FaTimesCircle,
    title: 'Overwhelming Amount of Information',
    description: 'The sheer volume of information available can be overwhelming, making it hard to focus on what’s important.'
  },
];

const Challenges = () => (
  <div className="pt-20 flex flex-col justify-center lg:max-w-7xl md:max-w-5xl w-[95%] mx-auto md:gap-14 py-6">
    <h2 className="text-center text-white">
      <RoughNotation type="highlight" show={true} color="#2563EB">
        Challenges
      </RoughNotation>
    </h2>
    <p className="text-center text-large text-default-500">Discover the common pain points users face when seeking Bible verses and how we can help overcome them:</p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {challengeItems.map((item, index) => (
        <div key={index} className="flex flex-col items-center p-4 bg-gray-100 dark:bg-gray-700 rounded shadow">
          <item.icon className="text-3xl mb-2 text-blue-500" />
          <h3 className="text-lg font-bold mb-2">{item.title}</h3>
          <p className="text-center">{item.description}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Challenges;
