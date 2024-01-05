import { getFeaturedPosts } from "@/service/posts";
import { PostsGrid } from "./PostsGrid";

type TProps = { folderName?: string };

export const FeaturedPosts = async ({ folderName }: TProps) => {
  const posts = await getFeaturedPosts(folderName);

  return (
    <section>
      <PostsGrid posts={posts} />
    </section>
  );
};
