
import PostList from "@/components/post/PostList";
import { getPosts } from "@/lib/post";

export default async function PostPage() {
  const { posts } = await getPosts();

  return (
    <div className="flex flex-row w-full pt-12">
      <div className="hidden md:block md:w-1/5 pl-6"></div>
      <div className="w-full md:w-3/5 px-6">
        <PostList posts={posts} />
      </div>
    </div>
  );
}
