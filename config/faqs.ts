export const FAQS_EN = [
  {
    title: "What is Bible Verses AI?",
    content:
      "Bible Verses AI is a platform that provides accurate and diverse Bible verses and explanations, helping users find the spiritual guidance they need quickly and easily.",
  },
  {
    title: "Is Bible Verses AI free to use?",
    content:
      "Yes, Bible Verses AI is completely free to use. If you find our service helpful and want to support us, you can buy the author a coffee at https://yxstore.lemonsqueezy.com/buy/af8de04f-8f1c-48d4-bbb2-8318a1f0d450",
  },
  {
    title: "How does Bible Verses AI ensure the accuracy of its content?",
    content:
      "We use authoritative sources and advanced AI technology to provide accurate and reliable Bible verses and explanations. Our content is continuously reviewed and updated to maintain high standards.",
  },
  {
    title: "What are the main features of Bible Verses AI?",
    content:
      "Bible Verses AI offers features like daily Bible verses, detailed verse explanations, thematic verse recommendations, prayer suggestions, and verse memorization tools.",
  },
  {
    title: "How can I search for specific Bible verses?",
    content:
      "You can use the search function on our chat page to quickly find specific Bible verses. Just enter your keywords or questions, and our AI will provide relevant verses and explanations.",
  },
  {
    title: "What makes Bible Verses AI unique?",
    content:
      "Bible Verses AI combines advanced AI with a vast database of Bible verses, providing personalized and accurate responses to user queries. Our platform is user-friendly, responsive, and optimized for quick and reliable service.",
  },
  {
    title: "How can I use Bible Verses AI for daily devotionals?",
    content:
      "You can access the daily verse feature on our chat page, which provides a new Bible verse each day along with insightful reflections and explanations to guide your daily devotionals.",
  },
  {
    title: "Can Bible Verses AI help with prayer suggestions?",
    content:
      "Yes, Bible Verses AI offers prayer suggestions based on your specific needs and situations, providing relevant Bible verses and guidance for your prayers.",
  },
  {
    title: "How can I provide feedback or suggestions for Bible Verses AI?",
    content:
      "We welcome your feedback and suggestions. You can contact us via email at yxchen1994@gmail.com",
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

