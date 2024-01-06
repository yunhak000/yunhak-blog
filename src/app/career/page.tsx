import { MarkdownViewer } from "@/components/MarkdownViewer";
import { getCareer } from "@/service/career";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default async function Career() {
  const contents = await getCareer();

  return <MarkdownViewer contents={contents} />;
}
