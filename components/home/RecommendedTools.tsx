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
        <a href="https://dokeyai.com/" title="Dokey AI Tools Directory" className="text-blue-600 dark:text-blue-400 no-underline hover:underline">DokeyAI</a>
        <a href="https://dang.ai/" target="_blank" ><img src="https://cdn.prod.website-files.com/63d8afd87da01fb58ea3fbcb/6487e2868c6c8f93b4828827_dang-badge.png" alt="Dang.ai" width="150" height="54" /></a>
        <a href="https://seektop.ai" title="SeekTop AI Tools Directory" className="text-blue-600 dark:text-blue-400 no-underline hover:underline">SeekTop.ai</a>
        <a href="https://aistage.net" title="AIStage" className="text-blue-600 dark:text-blue-400 no-underline hover:underline">AIStage</a>
        <a href="https://aiwith.me" title="AI WITH.ME | Discover thousands of AI Tools" className="text-blue-600 dark:text-blue-400 no-underline hover:underline">AI WITH.ME</a>
      </div>
    </div>
  );
};