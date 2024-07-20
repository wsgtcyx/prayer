

const tools = [
  { name: "Woy AI Tools", link: "https://woy.ai/", title: "Woy AI Tools Directory" },
  { name: "Tap4 AI Tools", link: "https://tap4.ai/", title: "Tap4 AI Tools Directory" },
  { name: "DokeyAI", link: "https://dokeyai.com/", title: "Dokey AI Tools Directory" },
  { name: "Dang.ai", link: "https://dang.ai/", img: "https://cdn.prod.website-files.com/63d8afd87da01fb58ea3fbcb/6487e2868c6c8f93b4828827_dang-badge.png" },
  { name: "SeekTop.ai", link: "https://seektop.ai", title: "SeekTop AI Tools Directory" },
  { name: "AIStage", link: "https://aistage.net", title: "AIStage" },
  { name: "AI WITH.ME", link: "https://aiwith.me", title: "AI WITH.ME | Discover thousands of AI Tools" },
  { name: "AIFnd", link: "https://aifnd.net/", title: "AIFnd Tools Directory" },
  { name: "All in AI Tools", link: "https://allinai.tools", title: "Explore the Best AI Tools" },
  { name: "AI Tools Explorer", link: "https://aitoolsexplorer.org/", title: "AI Tools Explorer" },
  { name: "AITOOLIST", link: "https://www.aitoolist.com/", title: "AITOOLIST" },
  { name: "Awesome AI Directory", link: "https://awesomeai.cc/", title: "Awesome AI Directory Tools Directory" },
  { name: "YP for AI", link: "https://ypforai.com", title: "YP for AI Tools Directory" },
  { name: "What Is Ai Tools", link: "https://whatisaitools.com/", title: "What Is Ai Tools" },
  { name: "T0 AI Tools Directory", link: "https://t0ai.com", title: "T0 AI Tools Directory" },
  { name: "AI Cash Cow Directory", link: "https://producthunt.ai/", title: "AI Cash Cow Directory" },
  { name: "Bai.tools", link: "https://bai.tools/", title: "Best AI Tools Directory" },
  { name: "AI Tools Directory", link: "https://aitoolbox.tools/", title: "AI Tools Directory" },
  { name: "AI Findr Tools Directory", link: "https://ai-findr.com/", title: "AI Findr Tools Directory" },
  { name: "Smart AI Tools Directory", link: "https://smartaitools.run/", title: "Smart AI Tools Directory" },
  { name: "toolpilot.ai", link: "https://www.toolpilot.ai", img: "https://5250429.webp.li/2024/07/836eeca4ff38fc38bee9ae2e1c926906.png" },
  { name: "ToolsFine Directory", link: "https://toolsfine.com", title: "ToolsFine Directory" },
  { name: "TopFree AI", link: "https://topfree.ai/", title: "TopFree.AI Tools Directory" },
  { name: "MagicBox.Tools", link: "https://magicbox.tools/", title: "MagicBox.Tools - AI Tools Directory" },
  { name: "AiHeron", link: "https://www.aiheron.com/", title: "智鹭AI导航" },
  { name: "Explore the Best AI Tools", link: "https://allinai.tools", title: "All in AI Tools" }
]

export const RecommendAITools: React.FC = () => {
  return (
    <div className="w-full max-w-5xl p-6 bg-gray-100 dark:bg-gray-800 rounded shadow mt-8">
      <h2 className="text-xl font-semibold text-center mb-4">Recommend AI Tools</h2>
      <div className="recommend-grid">
        {tools.map((tool, index) => (
          <div key={index} className="recommend-item bg-white dark:bg-gray-700">
            {tool.img ? (
              <a href={tool.link} target="_blank">
                <img src={tool.img} alt={tool.name} width="150" height="54" className="recommend-img" />
              </a>
            ) : (
              <a href={tool.link} target="_blank" className="recommend-link" title={tool.title}>
                {tool.name}
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
