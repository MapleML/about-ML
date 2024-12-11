"use client";

import { useEffect, useState, useCallback, useRef } from "react";
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

  const timeoutRef = useRef<NodeJS.Timeout>();
  const currentWord = words[wordIndex];

  // 游標閃爍效果
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  const typeNextCharacter = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    const handleTyping = () => {
      if (!isDeleting) {
        // 打字中
        if (currentText !== currentWord) {
          setCurrentText(currentWord.slice(0, currentText.length + 1));
        } else {
          // 完成打字，等待刪除
          timeoutRef.current = setTimeout(() => {
            setIsDeleting(true);
          }, delayAfterWord);
          return;
        }
      } else {
        // 刪除中
        if (currentText === "") {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
          return;
        }
        setCurrentText(currentText.slice(0, currentText.length - 1));
      }
    };

    timeoutRef.current = setTimeout(
      handleTyping,
      isDeleting ? speed / 2 : speed
    );
  }, [
    currentText,
    currentWord,
    delayAfterWord,
    isDeleting,
    speed,
    words.length,
  ]);

  useEffect(() => {
    typeNextCharacter();
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [typeNextCharacter]);

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
