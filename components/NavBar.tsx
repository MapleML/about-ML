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
      text: "text-primary-500",
      bg: "bg-primary-50/90",
      border: "border-primary-100",
      glow: "bg-primary-200/20",
      activeGlow: "bg-primary-200/30",
    },
    {
      text: "text-secondary-600",
      bg: "bg-secondary-50/90",
      border: "border-secondary-100",
      glow: "bg-secondary-200/20",
      activeGlow: "bg-secondary-200/30",
    },
    {
      text: "text-accent-500",
      bg: "bg-accent-50/90",
      border: "border-accent-100",
      glow: "bg-accent-200/20",
      activeGlow: "bg-accent-200/30",
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
    let ticking = false;
    let rafId: number;

    return () => {
      if (!ticking) {
        rafId = window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
      return () => {
        if (rafId) {
          window.cancelAnimationFrame(rafId);
        }
      };
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
    const throttledScroll = throttleScroll();
    lastScrollY.current = window.scrollY;
    window.addEventListener("scroll", throttledScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", throttledScroll);
      if (buttonScrollTimeout.current) {
        clearTimeout(buttonScrollTimeout.current);
      }
    };
  }, [throttleScroll]);

  return (
    <header
      className={`
        fixed inset-x-0 top-0 z-50 
        transition-all duration-200 ease-out
        ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        }
      `}
    >
      <nav className="flex items-center justify-center p-4">
        <div
          className="
            flex items-center gap-1.5 rounded-full 
            border border-white/20
            bg-white/60 p-1.5
            shadow-lg backdrop-blur-md
            md:gap-2 md:px-3 md:py-2
          "
        >
          {navItems.map((item, index) => {
            const scheme = getColorScheme(index);
            const isActive = activeItem === index;

            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveItem(index);
                  scrollToSection(item.id);
                  setIsVisible(true);
                }}
                className={`
                  group relative flex items-center gap-1.5
                  rounded-full px-3 py-1.5
                  transition-all duration-200 ease-out
                  md:gap-2 md:px-4 md:py-2
                  ${
                    isActive
                      ? `${scheme.text} ${scheme.bg} ${scheme.border} shadow-sm`
                      : "text-neutral-600 hover:bg-white/80"
                  }
                `}
                aria-label={item.label}
              >
                {isActive && (
                  <>
                    <div
                      className={`
                      absolute inset-0 -z-10 rounded-full blur-md
                      ${scheme.activeGlow}
                    `}
                    />
                    <div
                      className={`
                      absolute inset-0 -z-10 rounded-full opacity-50
                      ${scheme.glow}
                    `}
                    />
                  </>
                )}

                <div
                  className={`
                  relative transition-transform duration-200
                  ${isActive ? "scale-110" : "group-hover:scale-105"}
                `}
                >
                  <item.icon
                    size={item.size}
                    className={isActive ? "drop-shadow-sm" : ""}
                  />
                </div>

                <span
                  className="
                  relative hidden text-sm font-medium 
                  tracking-wide md:inline-block
                "
                >
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
