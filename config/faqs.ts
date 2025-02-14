import { LEMON_SQUEEZY_URL } from "@/config/site";

export const FAQS_EN = [
  {
    title: "What is PrayerAI?",
    content:
      "PrayerAI is a platform that helps you create personalized prayers tailored to your specific needs. Our AI technology assists you in crafting heartfelt prayers quickly and easily.",
  },
  {
    title: "Is PrayerAI free to use?",
    content:
      "Yes, PrayerAI is completely free to use. If you find our service helpful and want to support us, you can buy the author a coffee at " +
      LEMON_SQUEEZY_URL,
  },
  {
    title: "How does PrayerAI work?",
    content:
      "PrayerAI uses advanced AI algorithms to generate custom prayers based on your input. Simply provide your specific needs or intentions, and our AI will create a personalized prayer for you.",
  },
  {
    title: "What are the main features of PrayerAI?",
    content:
      "PrayerAI offers features such as personalized prayer generation, prayer writing guides, and a vast library of prayers and articles to inspire and guide your spiritual journey.",
  },
  {
    title: "How can I create a personalized prayer?",
    content:
      "You can use the prayer generation function on our website. Just enter your specific needs or intentions, and our AI will generate a customized prayer for you.",
  },
  {
    title: "What makes PrayerAI unique?",
    content:
      "PrayerAI combines advanced AI technology with a focus on personalization and compassion. Our platform is user-friendly, responsive, and designed to provide heartfelt and meaningful prayers.",
  },
  {
    title: "Can PrayerAI help with writing my own prayers?",
    content:
      "Yes, PrayerAI offers comprehensive guides and tips on how to write your own meaningful and effective prayers, helping you express your deepest thoughts and feelings.",
  },
  {
    title: "How can I use PrayerAI for daily devotions?",
    content:
      "You can access our prayer library and daily inspiration section for prayers and articles to guide your daily devotions. Our AI-generated prayers can also provide daily spiritual support.",
  },
  {
    title: "How can I provide feedback or suggestions for PrayerAI?",
    content:
      "We welcome your feedback and suggestions. You can contact us via email at support@prayer-for.com",
  },
  {
    title: "How can I support PrayerAI?",
    content:
      "If you find our service helpful and would like to show your appreciation, you can buy the author a coffee at " +
      LEMON_SQUEEZY_URL,
  },
];

interface FAQSCollection {
  [key: `FAQS_${string}`]: {
    title: string;
    content: string;
  }[];
}
export const ALL_FAQS: FAQSCollection = {
  FAQS_EN,
};

