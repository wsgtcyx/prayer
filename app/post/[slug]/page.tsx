
import MDXComponents from "@/components/mdx/MDXComponents";
import TOC from "@/components/mdx/TOC";
import AddToAnyShare from "@/components/post/AddToAnyShare";
import PostList from "@/components/post/PostList";
import { Separator } from "@/components/ui/seperator";
import { siteConfig } from "@/config/site";
import { getPosts } from "@/lib/post";
import { Post } from "@/types/post";
import dayjs from "dayjs";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { notFound } from "next/navigation";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";

type Props = {
  params: {
    slug: string;
  };
};

const options = {
  parseFrontmatter: true,
  mdxOptions: {
    remarkPlugins: [remarkGfm, remarkMath],
    rehypePlugins: [
      [
        rehypePrettyCode,
        {
          keepBackground: false,
          defaultLang: {
            block: "typescript",
            inline: "javascript",
          },
        },
      ],
    ],
  },
};

export async function generateMetadata({ params }: Props) {
  const { slug } = params;
  const { posts }: { posts: Post[] } = await getPosts();
  const post: Post | undefined = posts.find(
    (post) => post.metadata.slug === slug
  );

  if (!post) {
    throw new Error(`Post with slug ${slug} not found`);
  }

  return {
    ...siteConfig,
    title: post.metadata.metaTitle,
    description: post.metadata.metaDescription,
    image: post.metadata.image,
    openGraph: {
      type: 'article',
      title: post.metadata.metaTitle,
      description: post.metadata.metaDescription,
      images: [
        {
          url: post.metadata.image,
          width: 800,
          height: 600,
          alt: post.metadata.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.metadata.metaTitle,
      description: post.metadata.metaDescription,
      images: [post.metadata.image],
    },
  };
}

export default async function DetailsPage({ params }: Props) {
  const { slug } = params;
  const { posts }: { posts: Post[] } = await getPosts();
  const postIndex = posts.findIndex((post) => post.metadata.slug === slug);
  const post = posts[postIndex];
  // Reverse list order, thus invert condition check
  const nextPost = postIndex - 1 >= 0 ? posts[postIndex - 1] : null;
  const prevPost = postIndex + 1 < posts.length ? posts[postIndex + 1] : null;

  if (!post) {
    notFound();
  }

  const { content, metadata } = post;

  return (
    <div className="flex flex-row w-full pt-2">
      <aside className="hidden md:block md:w-1/5 pl-6 max-h-[100vh] h-full overflow-auto sticky top-0 left-0">
        <div className="text-lg font-bold mb-4">Other posts about prayers</div>
        <PostList isSide posts={posts} />
      </aside>
      <div className="w-full md:w-3/5 px-6">
        <img className="rounded border-4 border-main justify-center mx-auto" src={metadata.image} alt={metadata.title} />
        <h1 className="text-4xl font-bold mb-4">{metadata.title}</h1>
        <div className="block md:hidden mb-4">
          <div className="text-xl font-bold mb-4">Table of contents</div>
          <TOC />
        </div>
        <article id={`article`}>
          <MDXRemote
            source={content}
            components={MDXComponents}
            options={options as any}
          />
        </article>
        <AddToAnyShare />
        <Separator className="my-12 bg-gray-600" />
        <div className="flex justify-between">
          <div>postTime: {dayjs(metadata.date).format("YYYY-MM-DD")}</div>
          <div className="flex gap-8 flex-col sm:flex-row">
            {prevPost ? (
              <Link href={prevPost.metadata.slug} className="link-underline">
                previous_post
              </Link>
            ) : (
              <></>
            )}
            {nextPost ? (
              <Link href={nextPost.metadata.slug} className="link-underline">
                next_post
              </Link>
            ) : (
              <></>
            )}
            <Link href="/" className="link-underline">
              go home
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden md:flex flex-col justify-start md:w-1/5 pr-6">
        <div className="text-xl font-bold mb-4">Table of contents</div>
        <TOC />
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const { posts }: { posts: Post[] } = await getPosts();

  return posts.map((post) => ({
    slug: post.metadata.slug,
  }));
}
