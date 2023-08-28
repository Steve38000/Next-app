"use client";
import Link from "next/link";
import "./style.css";
import { usePathname } from "next/navigation";
export default function RootLayout({ children }) {
  const usePath = usePathname();
  return (
    <html lang="en">
      <body>
        <div>
          {usePath !== "/blogs/Sportsblog" ? (
            <ul className="layout-menu">
              <li>
                <Link href="/blogs/Article"> Article</Link>
              </li>
              <li>
                <Link href="/blogs/Newblog">NewsBlog</Link>
              </li>
              <li>
                <Link href="/blogs/Sportsblog"> Sports Blog</Link>
              </li>
              <li>
                <Link href="/"> Home</Link>
              </li>
            </ul>
          ) : null}
        </div>
        {children}
      </body>
    </html>
  );
}
