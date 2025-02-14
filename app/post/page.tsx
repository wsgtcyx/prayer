
import PostList from "@/components/post/PostList";
import { getPosts } from "@/lib/post";

export async function generateMetadata() {
  return {
    title: "Prayer Articles - Find the Tips for Perfect Prayers ",
    description: "Explore our extensive collection of prayer articles at PrayerAI. Find prayers for healing, peace, strength.",
    keywords: "prayer, prayers for healing, customized prayers, AI prayers, how to pray, best prayers, prayer articles",
  };
}

export default async function PostPage() {
  const { posts } = await getPosts();

  return (
    <div className="flex flex-col items-center w-full pt-12">
      <div className="w-full md:w-3/5 px-6">
        <h1 className="text-4xl font-bold mb-8 text-center">Discover Powerful Prayers and Prayer Tips</h1>
        <PostList posts={posts} />
      </div>
    </div>
  );
}
