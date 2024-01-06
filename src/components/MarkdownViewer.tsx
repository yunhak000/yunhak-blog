"use client";

import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import Image from "next/image";

type TProps = {
  contents: string;
};

export const MarkdownViewer = ({ contents }: TProps) => {
  return (
    <Markdown
      className="prose max-w-full"
      remarkPlugins={[remarkGfm]}
      components={{
        code(props) {
          const { ref, children, className, node, ...rest } = props;
          const match = /language-(\w+)/.exec(className || "");
          return match ? (
            <SyntaxHighlighter PreTag="div" language={match[1]} {...rest} style={materialDark}>
              {String(children).replace(/\n$/, "")}
            </SyntaxHighlighter>
          ) : (
            <code {...rest} className={className}>
              {children}
            </code>
          );
        },
        img: (image) => <Image className="w-full object-cover" src={image.src || ""} alt={image.alt || ""} width={500} height={350} />,
      }}
    >
      {contents}
    </Markdown>
  );
};
