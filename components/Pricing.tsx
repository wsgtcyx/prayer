import { Button } from "@/components/ui/button";
import React from 'react';

interface PricingTier {
  name: string;
  description: string;
  price: string;
  period: string;
  features: string[];
  buttonText: string;
  popular?: boolean;
}

const pricingTiers: PricingTier[] = [
  {
    name: "Free",
    description: "Begin Your Exploration Journey",
    price: "$0",
    period: "/ day",
    features: [
      "10 free credits per day",
      "Optional credits purchase"
    ],
    buttonText: "Get Started"
  },
  {
    name: "Premium",
    description: "50x more credits than Free version",
    price: "$4.99",
    period: "/ month",
    features: [
      "Up to 500 credits per day",
      "Optional credits purchase",
      "Early access to new features"
    ],
    buttonText: "Upgrade Now",
    popular: true
  },
  {
    name: "Boost Pack",
    description: "Enough for a worry-free week",
    price: "$0.99",
    period: "",
    features: [
      "One-off buy",
      "100 credits 7-day validity",
      "No auto-renewal after expiry"
    ],
    buttonText: "Get 100 credits"
  }
];

const PricingTier: React.FC<PricingTier> = ({ name, description, price, period, features, buttonText, popular }) => (
  <div className="flex flex-col p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
    {popular && (
      <div className="self-start px-3 py-1 text-sm text-white bg-pink-500 rounded-full mb-4">
        Popular
      </div>
    )}
    <h2 className="text-2xl font-bold dark:text-white">{name}</h2>
    <p className="mt-2 text-gray-600 dark:text-gray-300">{description}</p>
    <div className="mt-4">
      <span className="text-4xl font-bold dark:text-white">{price}</span>
      <span className="text-gray-600 dark:text-gray-300">{period}</span>
    </div>
    <ul className="mt-6 space-y-4">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center">
          <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
          <span className="dark:text-gray-300">{feature}</span>
        </li>
      ))}
    </ul>
    <Button className="mt-8 w-full" variant={popular ? "default" : "outline"}>
      {buttonText}
    </Button>
  </div>
);

const Pricing: React.FC = () => {
  return (
    <div className="py-12 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            UPGRADE
          </h2>
        </div>
        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-3">
          {pricingTiers.map((tier, index) => (
            <PricingTier key={index} {...tier} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;