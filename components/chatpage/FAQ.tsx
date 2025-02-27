import { LEMON_SQUEEZY_URL } from "@/config/site";

const FAQ = () => (
  <div className="w-full max-w-4xl p-6 bg-white dark:bg-gray-800 rounded shadow mb-8">
    <h2 className="text-xl font-bold mb-4 text-center mx-auto">Frequently Asked Questions</h2>
    <ul className="list-disc list-inside space-y-4">
      <li>
        <strong>Is PrayerAI free to use?</strong> Yes, our platform is completely free to use. If you find it helpful and want to support us, you can buy us a coffee <a href={LEMON_SQUEEZY_URL} className="text-blue-500">here</a>.
      </li>
      <li>
        <strong>How does PrayerAI work?</strong> PrayerAI uses advanced AI algorithms to generate custom prayers based on your input. Simply provide your specific needs or intentions, and our AI will create a personalized prayer for you.
      </li>
      <li>
        <strong>What features does PrayerAI offer?</strong> Our platform offers personalized prayer generation, prayer writing guides, a vast library of prayers and articles, and more.
      </li>
      <li>
        <strong>Can I customize the prayers generated by PrayerAI?</strong> Yes, you can make specific requests to adjust the generated prayers, including modifying the length, adding descriptive words, specifying the religion, adjusting the tone, or changing any other aspects.
      </li>
      <li>
        <strong>Is it possible to receive daily prayers?</strong> Yes, you can access our prayer library and daily inspiration section for prayers and articles to guide your daily devotions. Our AI-generated prayers can also provide daily spiritual support.
      </li>
      <li>
        <strong>How can I provide feedback or suggestions for PrayerAI?</strong> We welcome your feedback and suggestions. You can contact us via email at support@prayer-for.com.
      </li>
      <li>
        <strong>How accurate are the prayers provided by PrayerAI?</strong> The prayers are generated using advanced AI technology and are designed to be meaningful and relevant to your specific needs and intentions.
      </li>
    </ul>
  </div>
);

export default FAQ;
