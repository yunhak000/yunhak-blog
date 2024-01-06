import { getDetailPost } from "@/service/posts";
import Markdown from "react-markdown";
import { MarkdownViewer } from "./MarkdownViewer";

type TProps = { folderName: string; fileName: string };

export const Contents = async ({ folderName, fileName }: TProps) => {
  const contents = await getDetailPost(folderName, fileName);

  return (
    <>
      <h2 className="text-[28px] font-bold mb-10">{fileName}</h2>
      <MarkdownViewer contents={contents} />;
    </>
  );
};
