import { TPost } from "@/type/posts";
import { readFile } from "fs/promises";
import path from "path";

export const getAllPosts = async (): Promise<TPost[]> => {
  const filePath = path.join(process.cwd(), "data", "posts.json");
  return readFile(filePath, "utf-8")
    .then<TPost[]>(JSON.parse)
    .then((posts) => posts.sort((a, b) => (a.date > b.date ? -1 : 1)));
};

export const getFeaturedPosts = async (folderName: string | undefined): Promise<TPost[]> => {
  const posts = await getAllPosts();

  return posts.filter((post) => {
    if (folderName) {
      return post.featured && post.category.includes(folderName);
    } else {
      return post.featured;
    }
  });
};

export const getDetailPost = async (folderName: string, fileName: string): Promise<string> => {
  const filePath = path.join(process.cwd(), `data/posts/${folderName}`, `${fileName}.md`);
  return readFile(filePath, "utf-8");
};
