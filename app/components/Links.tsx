import {
  IconBrandGithub,
  IconBrandLeetcode,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";
import React from "react";
import { FloatingDock } from "./ui/floating-dock";

function Links() {
  const links = [
    {
      title: "LinkedIn",
      icon: <IconBrandLinkedin className="h-full w-full text-blue-300" />,
      href: "https://www.linkedin.com/in/himanshu-yadav-81887220b/",
    },
    {
      title: "Leetcode",
      icon: <IconBrandLeetcode className="h-full w-full text-orange-300" />,
      href: "https://leetcode.com/u/Hy_34/",
    },
    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://x.com/himanshu_y34",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/himanshu3434",
    },
  ];

  return (
    <div className="flex items-center justify-center w-full my-10 mb-20">
      <FloatingDock
        mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
    </div>
  );
}

export default Links;
