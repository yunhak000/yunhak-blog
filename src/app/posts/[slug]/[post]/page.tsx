import { Contents } from "@/components/Contents";

type TProps = {
  params: { slug: string; post: string };
};

export default function PostDetail({ params: { slug, post } }: TProps) {
  return <Contents folderName={slug} fileName={post} />;
}
