

const tools = [
  { name: "Woy AI Tools", link: "https://woy.ai/", title: "Woy AI Tools Directory" },
  { name: "Tap4 AI Tools", link: "https://tap4.ai/", title: "Tap4 AI Tools Directory" },
  { name: "DokeyAI", link: "https://dokeyai.com/", title: "Dokey AI Tools Directory" },
  { name: "Dang.ai", link: "https://dang.ai/", img: "https://cdn.prod.website-files.com/63d8afd87da01fb58ea3fbcb/6487e2868c6c8f93b4828827_dang-badge.png" },
  { name: "AIStage", link: "https://aistage.net", title: "AIStage" },
  { name: "AI WITH.ME", link: "https://aiwith.me", title: "AI WITH.ME | Discover thousands of AI Tools" },
  { name: "All in AI Tools", link: "https://allinai.tools", title: "Explore the Best AI Tools" },
  { name: "AI Tools Explorer", link: "https://aitoolsexplorer.org/", title: "AI Tools Explorer" },
  { name: "What Is Ai Tools", link: "https://whatisaitools.com/", title: "What Is Ai Tools" },
  { name: "Bai.tools", link: "https://bai.tools/", title: "Best AI Tools Directory" },
  { name: "toolpilot.ai", link: "https://www.toolpilot.ai", img: "https://5250429.webp.li/2024/07/836eeca4ff38fc38bee9ae2e1c926906.png" },
  { name: "ToolsFine Directory", link: "https://toolsfine.com", title: "ToolsFine Directory" },
  { name: "TopFree AI", link: "https://topfree.ai/", title: "TopFree.AI Tools Directory" },
  { name: "MagicBox.Tools", link: "https://magicbox.tools/", title: "MagicBox.Tools - AI Tools Directory" },
  { name: "AiHeron", link: "https://www.aiheron.com/", title: "智鹭AI导航" },
  { name: "Directory Website Promote", link: "https://www.promotebusinessdirectory.com/", title: "Directory Website Promote" },
  { name: "PDF AI Online", link: "https://pdfaionline.com/", title: "PDF AI Online" },
  { name: "AI Song Generator", link: "https://aisonggenerator.net/", title: "AI Song Generator" },
  { "name": "AIPURE AI", "link": "https://aipure.ai/", "title": "AIPURE AI" },
  { "name": "My Lasso Collection", "link": "https://www.lasso.net/go/link/PL3Kdz", "title": "My Lasso Collection" },
  { "name": "Twitch", "link": "https://m.twitch.tv/yxchen1994/home", "title": "Twitch" },
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
