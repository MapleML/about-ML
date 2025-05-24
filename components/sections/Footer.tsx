"use client";

import React from "react";

import { socialLinks } from "@/constants";
import { useInView } from "@/hooks/useInView";

export default function Footer() {
  const [ref, inView, shouldAnimate] = useInView({ threshold: 0.2 });

  return (
    <footer>
      <div
        ref={ref}
        className={`mx-auto flex max-w-6xl flex-col items-center ${
          inView ? (shouldAnimate ? "animate-slide-in" : "") : "opacity-0"
        }`}
      >
        <div className="mx-auto w-full max-w-7xl px-4 py-12">
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-8">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                    aria-label={item.ariaLabel}
                  >
                    <div className="relative flex size-10 items-center justify-center rounded-full bg-black/40 p-2 backdrop-blur-sm transition-colors duration-200 hover:bg-white/20">
                      <Icon
                        className={`size-5 ${item.className}`}
                        aria-hidden="true"
                      />
                    </div>
                  </a>
                );
              })}
            </div>

            <p className="bg-gradient-to-r from-neutral-300 to-neutral-400 bg-clip-text text-sm text-transparent">
              ©  MapleML&apos;s Web{" "}
              <span className="text-accent-600 transition-colors duration-300">
                ♥
              </span>
            </p>
            <p className="bg-gradient-to-r from-neutral-300 to-neutral-400 bg-clip-text text-sm text-transparent">
              Forked from{" "}
              <a
                href="https://smallr-portfolio.vercel.app/en"
                target="_blank"
                rel="noopener noreferrer"
                className="underline transition-colors hover:text-accent-400"
              >
                small R
              </a>
            </p>
            <p className="bg-gradient-to-r from-neutral-300 to-neutral-400 bg-clip-text text-transparent">
              Domain supported by {" "}
              <a
                href="https://discord.com/users/523114942434639873"
                target="_blank"
                rel="noopener noreferrer"
                className="underline transition-colors hover:text-other-orange"
              >
                sangege
              </a>{" "}
              |{" "}
              <a
                href="https://coffeehost.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline transition-colors hover:text-other-orange"
              >
                Coffee Host
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}