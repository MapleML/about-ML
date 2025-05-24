'use client';

import { useEffect } from 'react';

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
    const scriptId = 'instagram-embed-script';

    const loadInstagramScript = () => {
      const existingScript = document.getElementById(scriptId);
      
      if (!existingScript) {
        const script = document.createElement('script');
        script.id = scriptId;
        script.src = 'https://www.instagram.com/embed.js';
        script.async = true;
        script.onload = () => {
          window.instgrm?.Embeds?.process();
        };
        document.body.appendChild(script);
      } else {
        // If already loaded, re-process
        window.instgrm?.Embeds?.process();
      }
    };

    const timer = setTimeout(loadInstagramScript, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-8">
      {/* Instagram Post 1 */}
      <blockquote
        className="instagram-media"
        data-instgrm-captioned
        data-instgrm-permalink="https://www.instagram.com/p/DIfSJKgyswB/"
        data-instgrm-version="14"
        style={{ maxWidth: 340, minWidth: 326, width: '99.375%' }}
      >
        <a
          href="https://www.instagram.com/p/DIfSJKgyswB/"
          target="_blank"
          rel="noopener noreferrer"
        >
          查看 Instagram 貼文
        </a>
      </blockquote>

      {/* Instagram Post 2 */}
      <blockquote
        className="instagram-media"
        data-instgrm-captioned
        data-instgrm-permalink="https://www.instagram.com/p/DGk7IQoSdV1/"
        data-instgrm-version="14"
        style={{ maxWidth: 340, minWidth: 326, width: '99.375%' }}
      >
        <a
          href="https://www.instagram.com/p/DGk7IQoSdV1/"
          target="_blank"
          rel="noopener noreferrer"
        >
          查看 Instagram 貼文
        </a>
      </blockquote>
    </div>
  );
}
