import Link from "next/link";
import { Hero } from "./Hero";

const menu = ["about", "posts", "contact"];

export const Header = () => {
  return (
    <header className="p-4 bg-blue-600 w-48">
      {/* <Link href="/">
        <h1>{"Hak's Blog"}</h1>
      </Link> */}
      <Hero />
      <nav>
        <ul className="flex flex-col gap-4 pt-4">
          {menu.map((item) => (
            <li key={item}>
              <Link href={`/${item}`} className="text-blue-50">
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
