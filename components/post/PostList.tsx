import { Post } from "@/types/post";
import dayjs from "dayjs";
import Link from "next/link";

export default async function WeeklyList({
  isSide,
  posts,
}: {
  isSide?: boolean;
  posts: Post[];
}) {
  // 对posts按日期从新到旧排序
  const sortedPosts = posts.sort((a, b) => dayjs(b.metadata.date).unix() - dayjs(a.metadata.date).unix());

  return (
    <ul className="flex flex-col gap-4">
      {sortedPosts.map((post) => (
        <li
          id={post.metadata.slug}
          key={post.metadata.slug}
          className="flex flex-col sm:flex-row gap-4 items-start"
        >
          {isSide ? (
            <></>
          ) : (
            <span className="text-[#8585a8] min-w-28">
              {dayjs(post.metadata.date).format("YYYY-MM-DD")}
            </span>
          )}
          <Link
            href={`/post/${post.metadata.slug}`}
            className="link-default break-words transition-colors duration-500 ease-in-out"
          >
            {post.metadata.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
