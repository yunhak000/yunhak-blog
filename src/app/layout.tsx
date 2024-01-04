import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hak's tech blog !",
  description: "하기의 기술 블로그",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${openSans.className} bg-white`}>
        <div className="container flex min-h-screen">
          <Header />
          <div className="flex-1">
            <div className="text-sky-950 p-4 max-lg:px-4">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
