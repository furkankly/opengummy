"use client";
import { spaceMono } from "@/app/fonts";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

export function WelcomingText() {
  const words = [
    {
      text: "Deconstructing",
    },
    {
      text: "the",
    },
    {
      text: "Gummy",
    },
    {
      text: "Paradigm:",
    },
    {
      text: "A",
    },
    {
      text: "Fruity",
    },
    {
      text: "Existential",
    },
    {
      text: "Quest",
    },
  ];
  return (
    <TypewriterEffect
      className={`z-10 self-start p-4 ${spaceMono.className}`}
      words={words}
    />
  );
}
