import Link from "next/link";
import { Hero } from "./Hero";

const menu = [
  { link: "/about", name: "about" },
  { link: "/posts/nextjs", name: "Nextjs" },
  { link: "/contact", name: "contact" },
];

export const Gnb = () => {
  return (
    <header className="p-4 bg-blue-600 w-48 h-full fixed">
      <Link href="/">
        <Hero />
      </Link>
      <nav>
        <ul className="flex flex-col gap-4 pt-4">
          {menu.map((item) => (
            <li key={item.name}>
              <Link href={`${item.link}`} className="text-blue-50">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
