"use client";

import { useEffect, useState } from "react";

const TITLES = [
  "Full-Stack Engineer",
  "Product Engineer",
  "Solutions Engineer",
  "Forward Deployed Engineer",
];

export default function TypeWriter({ className = "" }: { className?: string }) {
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const currentTitle = TITLES[titleIndex];

    if (isPaused) {
      const pauseTimer = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, 2000);
      return () => clearTimeout(pauseTimer);
    }

    if (isDeleting) {
      if (charIndex > 0) {
        const deleteTimer = setTimeout(() => setCharIndex(charIndex - 1), 30);
        return () => clearTimeout(deleteTimer);
      } else {
        setIsDeleting(false);
        setTitleIndex((titleIndex + 1) % TITLES.length);
      }
    } else {
      if (charIndex < currentTitle.length) {
        const typeTimer = setTimeout(() => setCharIndex(charIndex + 1), 80);
        return () => clearTimeout(typeTimer);
      } else {
        setIsPaused(true);
      }
    }
  }, [charIndex, isDeleting, isPaused, titleIndex]);

  const currentTitle = TITLES[titleIndex];
  const displayText = currentTitle.slice(0, charIndex);

  return (
    <span className={className}>
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
}
