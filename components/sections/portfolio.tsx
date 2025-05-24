"use client";

import { useState, useEffect } from "react";

import { useInView } from "@/hooks/useInView";
import { useTranslations } from 'next-intl';
type AnimeStatus = "watched" | "watching";

const MOBILE_DISPLAY_COUNT = 6;

export default function Anime() {
  const [activeTab, setActiveTab] = useState<AnimeStatus>("watched");
  const [showAll, setShowAll] = useState(false);
  const [ref, inView, shouldAnimate] = useInView({ threshold: 0.2 });
  const t = useTranslations();
  useEffect(() => {
    // 動態載入 Instagram 嵌入腳本
    if (typeof window !== "undefined" && typeof document !== "undefined") {
      const scriptId = "instagram-embed-script";
      if (!document.getElementById(scriptId)) {
        const script = document.createElement("script");
        script.id = scriptId;
        script.src = "//www.instagram.com/embed.js";
        script.async = true;
        document.body.appendChild(script);
      } else if ((window as any).instgrm) {
        (window as any).instgrm.Embeds.process();
      }
    }
  }, []);

  return (
    <section
      id="portfolio" className="mt-16">
      <div
        ref={ref}
        className={`mx-auto max-w-6xl px-4 ${
          inView ? (shouldAnimate ? "animate-slide-in" : "") : "opacity-0"
        }`}
      >
        <h1 className="mb-8 text-center text-4xl font-extrabold text-neutral-200">
          {t("portfolio")}
        </h1>

        <div className="mt-8 flex flex-wrap justify-center gap-8">
          {/* 第一則貼文 */}
          <blockquote
            className="instagram-media"
            data-instgrm-captioned
            data-instgrm-permalink="https://www.instagram.com/p/DIfSJKgyswB/?utm_source=ig_embed&amp;utm_campaign=loading"
            data-instgrm-version="14"
            style={{
              background: "#FFF",
              border: 0,
              borderRadius: 3,
              boxShadow: "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
              margin: 1,
              maxWidth: 340,
              minWidth: 326,
              padding: 0,
              width: "99.375%",
            }}
          >
            <a
              href="https://www.instagram.com/p/DIfSJKgyswB/?utm_source=ig_embed&amp;utm_campaign=loading"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "#FFF",
                lineHeight: 0,
                padding: 0,
                textAlign: "center",
                textDecoration: "none",
                width: "100%",
                display: "block",
              }}
            >
              在 Instagram 查看這則貼文
            </a>
          </blockquote>

          {/* 第二則貼文 */}
          <blockquote
            className="instagram-media"
            data-instgrm-captioned
            data-instgrm-permalink="https://www.instagram.com/p/DGk7IQoSdV1/?utm_source=ig_embed&amp;utm_campaign=loading"
            data-instgrm-version="14"
            style={{
              background: "#FFF",
              border: 0,
              borderRadius: 3,
              boxShadow: "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
              margin: 1,
              maxWidth: 340,
              minWidth: 326,
              padding: 0,
              width: "99.375%",
            }}
          >
            <a
              href="https://www.instagram.com/p/DGk7IQoSdV1/?utm_source=ig_embed&amp;utm_campaign=loading"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "#FFF",
                lineHeight: 0,
                padding: 0,
                textAlign: "center",
                textDecoration: "none",
                width: "100%",
                display: "block",
              }}
            >
              在 Instagram 查看這則貼文
            </a>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
