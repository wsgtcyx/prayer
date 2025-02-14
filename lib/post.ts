// lib/weekly.ts

import { Post } from "@/types/post";
import fs from "fs";
import path from "path";
const matter = require("gray-matter");

export async function getPosts(): Promise<{ posts: Post[] }> {
  const postsDirectory = path.join(process.cwd(), "content");
  let filenames = await fs.promises.readdir(postsDirectory);
  filenames = filenames.reverse();

  const posts = await Promise.all(
    filenames.map(async (filename) => {
      // 读取文件
      const fullPath = path.join(postsDirectory, filename);
      const fileContents = await fs.promises.readFile(fullPath, "utf8");

      // 解析内容
      const { data, content } = matter(fileContents);

      return {
        fullPath,
        metadata: data,
        content,
      };
    })
  );

  return { posts };
}

