import { FeaturedPosts } from "@/components/FeaturedPosts";
import { getFeaturedPosts } from "@/service/posts";

type TProps = {
  params: { slug: string };
};

export default async function PostContents({ params: { slug } }: TProps) {
  return <FeaturedPosts folderName={slug} />;
}
