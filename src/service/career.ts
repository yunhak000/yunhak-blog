import { TPost } from "@/type/posts";
import { readFile } from "fs/promises";
import path from "path";

export const getCareer = async (): Promise<string> => {
  const filePath = path.join(process.cwd(), "data/posts/career", "career.md");
  return readFile(filePath, "utf-8");
};
