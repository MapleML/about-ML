"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";

import { navItems } from "@/constants";

export default function NavBar() {
  const [activeItem, setActiveItem] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const lastScrollY = useRef(0);
  const isButtonScroll = useRef(false);
  const buttonScrollTimeout = useRef<ReturnType<typeof setTimeout> | null>(
    null
  );

  const colorSchemes = [
    {
      // primary 色系（原藍色）
      text: "text-primary-500",
      bg: "bg-primary-50",
      border: "border-primary-200",
      hover: "hover:text-primary-400",
      glow: "bg-primary-200",
    },
    {
      // secondary 色系（原琥珀色）
      text: "text-secondary-600",
      bg: "bg-secondary-50",
      border: "border-secondary-200",
      hover: "hover:text-secondary-400",
      glow: "bg-secondary-200",
    },
    {
      // accent 色系（原粉色）
      text: "text-accent-500",
      bg: "bg-accent-50",
      border: "border-accent-200",
      hover: "hover:text-accent-400",
      glow: "bg-accent-200",
    },
  ];

  const getColorScheme = (index: number) =>
    colorSchemes[index % colorSchemes.length];

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    const scrollingUp = currentScrollY < lastScrollY.current;

    if (currentScrollY < 50 || isButtonScroll.current) {
      setIsVisible(true);
    } else if (Math.abs(currentScrollY - lastScrollY.current) > 10) {
      setIsVisible(scrollingUp);
    }

    const viewportMiddle = window.innerHeight / 2;
    let currentSection = -1;
    let minDistance = Infinity;

    navItems.forEach((item, index) => {
      const element = document.getElementById(item.id);
      if (element) {
        const rect = element.getBoundingClientRect();
        const distance = Math.abs(rect.top + rect.height / 2 - viewportMiddle);
        if (distance < minDistance) {
          minDistance = distance;
          currentSection = index;
        }
      }
    });

    if (currentSection !== -1) {
      setActiveItem(currentSection);
    }

    lastScrollY.current = currentScrollY;
  }, []);

  const throttleScroll = useCallback(() => {
    let isThrottled = false;

    return () => {
      if (!isThrottled) {
        isThrottled = true;
        handleScroll();

        setTimeout(() => {
          isThrottled = false;
        }, 150);
      }
    };
  }, [handleScroll]);

  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    isButtonScroll.current = true;

    if (buttonScrollTimeout.current) {
      clearTimeout(buttonScrollTimeout.current);
    }

    buttonScrollTimeout.current = setTimeout(() => {
      isButtonScroll.current = false;
    }, 1000);

    const navHeight = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - navHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    lastScrollY.current = window.scrollY;
    window.addEventListener("scroll", throttleScroll(), { passive: true });
    return () => {
      window.removeEventListener("scroll", throttleScroll());
      if (buttonScrollTimeout.current) {
        clearTimeout(buttonScrollTimeout.current);
      }
    };
  }, [throttleScroll]);

  return (
    <header
      className={`
        fixed inset-x-0 top-0 z-50 
        transition-all duration-150 ease-out
        ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}
      `}
    >
      <nav className="flex items-center justify-center p-4">
        <div className="flex items-center gap-2 rounded-full border border-neutral-200/40 bg-neutral-50/70 p-2 shadow-lg backdrop-blur-md transition-colors duration-150 md:gap-2 md:px-4 md:py-3">
          {navItems.map((item, index) => {
            const scheme = getColorScheme(index);
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveItem(index);
                  scrollToSection(item.id);
                  setIsVisible(true);
                }}
                className={`
                  group relative flex items-center gap-1
                  rounded-full px-2 py-1.5 
                  transition-colors duration-150 ease-out
                  md:gap-2 md:px-5 md:py-2
                  ${
                    activeItem === index
                      ? `${scheme.text} ${scheme.bg} ${scheme.border}`
                      : `text-neutral-500 hover:bg-neutral-50/80 ${scheme.hover}`
                  }
                `}
                aria-label={item.label}
              >
                {activeItem === index && (
                  <div
                    className={`absolute inset-0 -z-10 rounded-full opacity-30 blur-sm ${scheme.glow}`}
                  />
                )}

                <div
                  className="relative transition-transform duration-150 ease-out 
                  group-hover:scale-105"
                >
                  <item.icon size={item.size} />
                </div>

                <span className="relative hidden text-sm font-medium md:inline-block">
                  {item.label}
                  <span
                    className={`
                      absolute inset-x-0 -bottom-1 h-0.5
                      transition-transform duration-150 ease-out
                      ${scheme.glow}
                      ${
                        activeItem === index
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-75"
                      }
                    `}
                  />
                </span>
              </button>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
