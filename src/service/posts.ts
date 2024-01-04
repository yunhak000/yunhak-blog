import { TPost } from "@/type/posts";
import { readFile } from "fs/promises";
import path from "path";

export const getAllPosts = async (): Promise<TPost[]> => {
  const filePath = path.join(process.cwd(), "data", "posts.json");
  return readFile(filePath, "utf-8")
    .then<TPost[]>(JSON.parse)
    .then((posts) => posts.sort((a, b) => (a.date > b.date ? -1 : 1)));
};

export const getFeaturedPosts = async (): Promise<TPost[]> => {
  const posts = await getAllPosts();
  return posts.filter((post) => post.featured);
};
