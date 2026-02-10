"use client";

import { useEffect, useState } from "react";

const GREETINGS = [
  "Hello",
  "Namaste",
  "Hola",
  "Bonjour",
  "Salaam",
  "Nǐ hǎo",
];

export default function GreetingWheel({
  intervalMs = 3000,
  className = "",
}: {
  intervalMs?: number;
  className?: string;
}) {
  const [idx, setIdx] = useState(0);
  const [animating, setAnimating] = useState(true);

  const items = [...GREETINGS, GREETINGS[0]];

  useEffect(() => {
    const id = setInterval(() => {
      setIdx((i) => i + 1);
    }, intervalMs);
    return () => clearInterval(id);
  }, [intervalMs]);

  useEffect(() => {
    if (idx === items.length) {
      setAnimating(false);
      setIdx(0);
      requestAnimationFrame(() => setAnimating(true));
    }
  }, [idx, items.length]);

  return (
    <span
      className={`relative inline-block h-[1em] overflow-hidden align-baseline ${className}`}
      aria-live="polite"
    >
      <span
        className={`block will-change-transform ${
          animating ? "transition-transform duration-700 ease-out" : ""
        }`}
        style={{ transform: `translateY(-${idx}em)` }}
      >
        {items.map((greet, i) => (
          <span key={i} className="block h-[1em] leading-[1]">
            {greet}
          </span>
        ))}
      </span>
    </span>
  );
}