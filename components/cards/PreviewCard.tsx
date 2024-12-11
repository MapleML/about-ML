"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import type { PreviewCardProps } from "@/types";

export default function PreviewCard({
  title,
  description,
  imageSrc,
  imageAlt,
  techStack = [],
  actions = [],
  className = "",
}: PreviewCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`
        group relative overflow-hidden rounded-3xl
        border border-neutral-200/30 
        bg-gradient-to-br from-white/90 via-white/70 to-white/50
        backdrop-blur-md transition-all duration-500
        hover:border-neutral-200/50 hover:shadow-xl hover:shadow-neutral-200/20
        ${className}
      `}
    >
      {/* 圖片容器 */}
      <div className="relative aspect-[16/9] w-full overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt || title}
          fill
          className="object-cover transition-all duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />

        {/* 技術棧圖示 */}
        {techStack && techStack.length > 0 && (
          <div className="absolute bottom-4 left-4 flex flex-wrap gap-3">
            {techStack.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <div
                  key={index}
                  className="rounded-full bg-white/95 p-2.5 shadow-lg backdrop-blur-sm
                           transition-all duration-300 hover:scale-110 hover:bg-white"
                  title={tech.label}
                >
                  <Icon className="size-5" style={{ color: tech.color }} />
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* 內容區域 */}
      <div className="relative space-y-4 p-6">
        <div className="space-y-2">
          <h3 className="bg-gradient-to-r from-neutral-800 to-neutral-600 bg-clip-text text-xl font-bold text-transparent md:text-2xl">
            {title}
          </h3>
          {description && (
            <p className="text-sm text-neutral-600/90 md:text-base">
              {description}
            </p>
          )}
        </div>

        {/* 操作按鈕 */}
        {actions && actions.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-2">
            {actions.map(({ icon: Icon, label, href }, index) => (
              <Link
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  group/link flex items-center gap-2
                  rounded-full px-4 py-2 text-sm font-medium
                  transition-all duration-300
                  ${
                    index === 0
                      ? "bg-primary-500 text-white hover:bg-primary-600"
                      : "border border-neutral-200 bg-white/80 text-neutral-600 hover:bg-white hover:text-neutral-800"
                  }
                `}
              >
                <Icon className="size-4 transition-transform duration-300 group-hover/link:scale-110" />
                <span>{label}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
