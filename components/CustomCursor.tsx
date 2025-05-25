"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLImageElement>(null);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {
      setShowCursor(false);
    }
    const move = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + "px";
        cursorRef.current.style.top = e.clientY + "px";
      }
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  if (!showCursor) return null;

  return (
    <Image
      ref={cursorRef}
      src="/Images/cursor.gif"
      alt="cursor"
      width={32}
      height={32}
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        pointerEvents: "none",
        zIndex: 9999,
        transform: "translate(-50%, -50%)",
      }}
    />
  );
}