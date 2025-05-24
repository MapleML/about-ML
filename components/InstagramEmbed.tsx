// components/InstagramEmbed.tsx
"use client";

import React, { useEffect } from "react";

interface Instgrm {
  Embeds: {
    process: () => void;
  };
}

declare global {
  interface Window {
    instgrm?: Instgrm;
  }
}

export default function InstagramEmbed() {
  useEffect(() => {
    const scriptId = "instagram-embed-script";

    if (typeof window !== "undefined" && typeof document !== "undefined") {
      if (!document.getElementById(scriptId)) {
        const script = document.createElement("script");
        script.id = scriptId;
        script.src = "//www.instagram.com/embed.js";
        script.async = true;
        document.body.appendChild(script);
      } else if (window.instgrm?.Embeds) {
        window.instgrm.Embeds.process();
      }
    }
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-8">
      {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
      <blockquote
        className="instagram-media"
        data-instgrm-captioned
        data-instgrm-permalink="https://www.instagram.com/p/DIfSJKgyswB/?utm_source=ig_embed&amp;utm_campaign=loading"
        data-instgrm-version="14"
        style={{ maxWidth: 340, minWidth: 326, width: "99.375%" }}
      >
        <a
          href="https://www.instagram.com/p/DIfSJKgyswB/?utm_source=ig_embed&amp;utm_campaign=loading"
          target="_blank"
          rel="noopener noreferrer"
        >
          查看 Instagram 貼文
        </a>
      </blockquote>

      {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
      <blockquote
        className="instagram-media"
        data-instgrm-captioned
        data-instgrm-permalink="https://www.instagram.com/p/DGk7IQoSdV1/?utm_source=ig_embed&amp;utm_campaign=loading"
        data-instgrm-version="14"
        style={{ maxWidth: 340, minWidth: 326, width: "99.375%" }}
      >
        <a
          href="https://www.instagram.com/p/DGk7IQoSdV1/?utm_source=ig_embed&amp;utm_campaign=loading"
          target="_blank"
          rel="noopener noreferrer"
        >
          查看 Instagram 貼文
        </a>
      </blockquote>
    </div>
  );
}
