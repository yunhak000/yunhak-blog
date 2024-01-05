import { Contents } from "@/components/Contents";

type TProps = {
  params: { slug: string; post: string };
};

export default function PostDetail({ params: { slug, post } }: TProps) {
  console.log(post);
  return <Contents folderName={slug} fileName={post} />;
}
