"use client";

import React, { useEffect, useRef, useState } from "react";


import type { TypeWriterProps } from "@/types";

export default function TypeWriter({
  words,
  speed = 100,
  delayAfterWord = 1000,
  cursorCharacter = "▋",
}: TypeWriterProps) {
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(true);

  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(null);
  const currentWord = words[wordIndex];

  // 游標閃爍效果
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    function typeNextCharacter() {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      const handleTyping = () => {
        if (!isDeleting) {
          // 打字中
          if (currentText !== currentWord) {
            setCurrentText(currentWord.slice(0, currentText.length + 1));
          } else {
            // 等待刪除
            timeoutRef.current = setTimeout(() => {
              setIsDeleting(true);
            }, delayAfterWord);
          }
        } else {
          // 刪除中
          if (currentText === "") {
            setIsDeleting(false);
            setWordIndex((prev) => (prev + 1) % words.length);
          } else {
            setCurrentText(currentText.slice(0, currentText.length - 1));
          }
        }
      };

      timeoutRef.current = setTimeout(
        handleTyping,
        isDeleting ? speed / 2 : speed
      );
    }

    typeNextCharacter();
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentText, currentWord, delayAfterWord, isDeleting, speed, words]);

  return (
    <span className="font-mono">
      {currentText}
      <span
        className={`inline-block transition-opacity duration-100 ${
          cursorVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        {cursorCharacter}
      </span>
    </span>
  );
}
