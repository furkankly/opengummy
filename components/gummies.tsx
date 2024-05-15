"use client";
import { SparklesCore } from "@/components/ui/sparkles";
import { useId } from "react";

export function Snakes() {
  return (
    <div className="relative h-40 w-40 xl:h-64 xl:w-64">
      <div className="absolute inset-0 bg-black [mask-image:url('/snakes.svg')] [mask-position:center] [mask-repeat:no-repeat]">
        <SparklesCore
          id="snakes"
          background="transparent"
          minSize={0.2}
          maxSize={1.5}
          particleDensity={2000}
          className="h-full w-full bg-violet-600"
          particleColor="#ffffff"
        />
      </div>
    </div>
  );
}

export function Sugar() {
  const id = useId();
  return (
    <div className="h-12 w-12 bg-black [mask-position:center] [mask-repeat:no-repeat] [mask-image:url('/sugar.svg')]">
      <SparklesCore
        id={`sugar-${id}`}
        background="transparent"
        minSize={0.2}
        maxSize={1.5}
        particleDensity={2000}
        className="h-full w-full bg-orange-400"
        particleColor="#ffffff"
      />
    </div>
  );
}

export function DoubleGummyBears() {
  const id = useId();
  return (
    <div className="h-12 w-12 bg-black [mask-position:center] [mask-repeat:no-repeat] [mask-image:url('/double-gummy-bears.svg')]">
      <SparklesCore
        id={`double-gummy-bears-${id}`}
        background="transparent"
        minSize={0.2}
        maxSize={1.5}
        particleDensity={2000}
        className="h-full w-full bg-violet-600"
        particleColor="#ffffff"
      />
    </div>
  );
}
