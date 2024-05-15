import { Snakes } from "./gummies";

export function Grid() {
  return (
    <div className="relative flex h-[100svh] flex-col items-center justify-center bg-neutral-200 bg-grid-black/[0.2] dark:bg-black dark:bg-grid-white/[0.2] xl:h-[75svh]">
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 bg-neutral-200 [mask-image:radial-gradient(ellipse_at_center,transparent_10%,white)] dark:bg-black"></div>
      <div className="relative self-end xl:right-1/4">
        <Snakes />
      </div>
      <div className="w-3/4 xl:w-1/2">
        <p className="relative bg-gradient-to-b from-black to-violet-500 bg-clip-text font-bold text-transparent dark:from-neutral-200 dark:to-violet-500 md:text-2xl lg:text-3xl">
          Propelled by 🍬e/acc🍬 principles applied to candy, we cross new
          frontiers sparking an unprecedented taste singularity in the gelatin
          gastronomic realm.
        </p>
      </div>
    </div>
  );
}
