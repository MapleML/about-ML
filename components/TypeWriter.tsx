"use client";

import React, { useState, useEffect } from "react";

interface TypeWriterProps {
  words: string[];
  speed?: number;
}

const TypeWriter: React.FC<TypeWriterProps> = ({ words = [], speed = 100 }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState<number>(0);
  const [currentText, setCurrentText] = useState<string>("");
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  useEffect(() => {
    const word: string = words[currentWordIndex] || "";
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText !== word) {
          setCurrentText(word.slice(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        } else {
          setCurrentText(word.slice(0, currentText.length - 1));
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words, speed]);

  return <span>{currentText || "\u00A0"}</span>;
};

export default TypeWriter;
