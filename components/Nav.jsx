"use client";

import { usePathname } from "next/navigation";

const { default: Link } = require("next/link");

const link = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-8">
      {link.map((item, index) => (
        <Link
          key={index}
          href={item.path}
          className={`${
            item.path === pathname && "text-accent border-b-2 border-accent"
          } capitalize font-medium hover:text-accent transition-all`}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
