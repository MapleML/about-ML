// components/sections/Code.tsx
"use client";

import { FaGithub } from "react-icons/fa";
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

import PreviewCard from "../cards/PreviewCard";

export default function Code() {
  const projects = [
    {
      title: "個人網站",
      description:
        "我的個人網站，使用 Next.js 15 App Router 和 Tailwind CSS 構建。",
      imageSrc: "/Projects/Project1.png",
      imageAlt: "Portfolio Website Preview",
      techStack: [
        {
          icon: SiNextdotjs,
          label: "Next.js",
          color: "#000000",
        },
        {
          icon: SiReact,
          label: "React",
          color: "#61DAFB",
        },
        {
          icon: SiTypescript,
          label: "TypeScript",
          color: "#3178C6",
        },
        {
          icon: SiTailwindcss,
          label: "Tailwind CSS",
          color: "#06B6D4",
        },
      ],
      actions: [
        {
          icon: FaGithub,
          label: "Source",
          href: "https://github.com/Ynoob87/about-small",
        },
      ],
    },
  ];

  return (
    <section id="code" className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text font-serif text-4xl font-bold text-transparent">
            程式天地
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-neutral-600">
            展示一些我最近做的程式和項目
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div key={index} className="group">
              <PreviewCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
