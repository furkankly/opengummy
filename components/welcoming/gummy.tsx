"use client";
import { SparklesCore } from "@/components/ui/sparkles";

export function Gummy() {
  return (
    <div className="absolute left-1/2 top-1/2 w-[20rem] -translate-x-1/2 transform lg:w-full">
      <div className="relative h-40 w-full">
        <SparklesCore
          background="transparent"
          minSize={0.2}
          maxSize={1.5}
          particleDensity={1200}
          className="h-full w-full bg-orange-600"
          particleColor="#ffffff"
        />
        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 bg-neutral-200 [mask-image:radial-gradient(150px_100px_at_bottom,transparent_90%,white)] dark:bg-black lg:[mask-image:radial-gradient(300px_150px_at_bottom,transparent_90%,white)] 2xl:[mask-image:radial-gradient(500px_150px_at_bottom,transparent_90%,white)]"></div>
      </div>

      <div className="relative h-40 w-full">
        <SparklesCore
          id="2"
          background="transparent"
          minSize={0.2}
          maxSize={1.5}
          particleDensity={1200}
          className="h-full w-full bg-orange-600"
          particleColor="#ffffff"
        />
        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 bg-neutral-200 [mask-image:radial-gradient(150px_100px_at_top,transparent_90%,white)] dark:bg-black lg:[mask-image:radial-gradient(300px_150px_at_top,transparent_90%,white)] 2xl:[mask-image:radial-gradient(500px_150px_at_top,transparent_90%,white)]"></div>
      </div>
    </div>
  );
}
