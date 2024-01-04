import { getAllPosts, getFeaturedPosts } from "@/service/posts";
import { PostsGrid } from "./PostsGrid";

export const FeaturedPosts = async () => {
  const posts = await getFeaturedPosts();

  return (
    <section>
      <PostsGrid posts={posts} />
    </section>
  );
};
