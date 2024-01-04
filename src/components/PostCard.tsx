import { TPost } from "@/type/posts";
import Image from "next/image";
import Link from "next/link";

type TProps = {
  post: TPost;
};

export const PostCard = ({ post }: TProps) => {
  return (
    <Link href={`/posts/${post.date}/${post.path}`}>
      <li className="rounded overflow-hidden shadow-2xl">
        <div className="overflow-hidden h-44 max-md:h-auto ">
          <Image src={post.imgSrc} alt="썸네일" width={400} height={400} className="w-full h-full object-cover object-center" />
        </div>
        <div className="p-3 flex flex-col gap-1">
          <time className="text-right text-xs text-slate-400">{post.date.toString()}</time>
          <h3 className="text-sm">{post.title}</h3>
          <p className="text-sm mb-2 truncate">{post.description}</p>
        </div>
      </li>
    </Link>
  );
};
