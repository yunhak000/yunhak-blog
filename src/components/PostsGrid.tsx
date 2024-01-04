import { TPost } from "@/type/posts";
import { PostCard } from "./PostCard";

type TProps = {
  posts: TPost[];
};

export const PostsGrid = ({ posts }: TProps) => {
  return (
    <ul className="grid gap-5 lg:grid-cols-4 md:grid-cols-3 max-md:grid-cols-1">
      {posts.map((post, i) => (
        <PostCard post={post} key={i} />
      ))}
    </ul>
  );
};
