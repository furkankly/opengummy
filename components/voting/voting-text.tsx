"use client";

import { useEffect, useRef } from "react";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const words = `Cast your gummy vote now by naming your choice for the masticated eschatological event that shall shatter the very boundaries of palatable reality as we know it. The destiny of degustation itself hinges upon your apocalyptic decision. No pressure, candy fans.`;

export function VotingText() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate = 0.8;
  }, []);

  return (
    <div
      id="vote"
      className="relative flex flex-1 flex-col items-center justify-center"
    >
      <video
        ref={videoRef}
        className="pointer-events-none absolute left-0 top-0 h-full w-full object-cover grayscale"
        playsInline
        muted
        autoPlay
        loop
        src="/bear-vid.mp4"
      />
      <div className="rounded-lg px-4 py-10 text-center text-neutral-200 backdrop-blur-lg backdrop-hue-rotate-90 backdrop-opacity-80 xl:w-2/3 xl:px-20">
        <p className="text-3xl font-extrabold xl:text-6xl">It&apos;s time.</p>
        <TextGenerateEffect words={words} />
      </div>
    </div>
  );
}
