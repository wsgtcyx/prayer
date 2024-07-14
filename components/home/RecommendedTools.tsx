export const RecommendAITools: React.FC = () => {
  return (
    <div className="w-full max-w-5xl p-6 bg-white dark:bg-gray-800 rounded shadow mt-8">
      <h2 className="text-2xl font-bold text-center mb-4">Recommend AI Tools</h2>
      <div className="flex flex-col items-center">
        <p className="text-center mb-4">
          Explore more AI tools to enhance your productivity and creativity.
        </p>
        <a
          href="https://woy.ai/"
          title="Woy AI Tools Directory"
          className="text-blue-600 dark:text-blue-400 no-underline hover:underline"
        >
          Woy AI Tools
        </a>
        <a href="https://tap4.ai/" title="Tap4 AI Tools Directory" className="text-blue-600 dark:text-blue-400 no-underline hover:underline">Tap4 AI Tools Diresctory</a>
      </div>
    </div>
  );
};