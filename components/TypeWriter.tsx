"use client";

import React, { useState, useEffect } from "react";

interface TypeWriterProps {
  words: string[];
  speed?: number;
}

export default function TypeWriter({ words, speed = 100 }: TypeWriterProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[currentWordIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (currentText !== word) {
            setCurrentText(word.slice(0, currentText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 1000);
          }
        } else {
          if (currentText === "") {
            setIsDeleting(false);
            setCurrentWordIndex((prev) => (prev + 1) % words.length);
          } else {
            setCurrentText(word.slice(0, currentText.length - 1));
          }
        }
      },
      isDeleting ? speed / 2 : speed
    );

    return () => clearTimeout(timeout);
  }, [currentText, currentWordIndex, isDeleting, speed, words]);

  return <span className="text-neutral-600">{currentText}</span>;
}
