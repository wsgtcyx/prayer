export const FAQS_EN = [
  {
    title: "What is Prayer AI?",
    content:
      "Prayer AI is a platform that helps you create personalized prayers tailored to your specific needs. Our AI technology assists you in crafting heartfelt prayers quickly and easily.",
  },
  {
    title: "Is Prayer AI free to use?",
    content:
      "Yes, Prayer AI is completely free to use. If you find our service helpful and want to support us, you can buy the author a coffee at [this link](https://yxstore.lemonsqueezy.com/buy/b080254b-b969-4919-8c8e-12cbb27d291e).",
  },
  {
    title: "How does Prayer AI work?",
    content:
      "Prayer AI uses advanced AI algorithms to generate custom prayers based on your input. Simply provide your specific needs or intentions, and our AI will create a personalized prayer for you.",
  },
  {
    title: "What are the main features of Prayer AI?",
    content:
      "Prayer AI offers features such as personalized prayer generation, prayer writing guides, and a vast library of prayers and articles to inspire and guide your spiritual journey.",
  },
  {
    title: "How can I create a personalized prayer?",
    content:
      "You can use the prayer generation function on our website. Just enter your specific needs or intentions, and our AI will generate a customized prayer for you.",
  },
  {
    title: "What makes Prayer AI unique?",
    content:
      "Prayer AI combines advanced AI technology with a focus on personalization and compassion. Our platform is user-friendly, responsive, and designed to provide heartfelt and meaningful prayers.",
  },
  {
    title: "Can Prayer AI help with writing my own prayers?",
    content:
      "Yes, Prayer AI offers comprehensive guides and tips on how to write your own meaningful and effective prayers, helping you express your deepest thoughts and feelings.",
  },
  {
    title: "How can I use Prayer AI for daily devotions?",
    content:
      "You can access our prayer library and daily inspiration section for prayers and articles to guide your daily devotions. Our AI-generated prayers can also provide daily spiritual support.",
  },
  {
    title: "How can I provide feedback or suggestions for Prayer AI?",
    content:
      "We welcome your feedback and suggestions. You can contact us via email at yxchen1994@gmail.com",
  },
  {
    title: "How can I support Prayer AI?",
    content:
      "If you find our service helpful and would like to show your appreciation, you can buy the author a coffee at https://yxstore.lemonsqueezy.com/buy/b080254b-b969-4919-8c8e-12cbb27d291e",
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

