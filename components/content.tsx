"use client";
import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

import { TracingBeam } from "@/components/ui/tracing-beam";

export function Content() {
  return (
    <div className="bg-[url('/bg-gummies.svg')] bg-repeat">
      <TracingBeam className="px-6">
        <div className="relative mx-auto max-w-2xl pt-4 antialiased">
          {content.map((item, index) => (
            <div key={`content-${index}`} className="mb-10">
              <h2 className="mb-4 break-words rounded-full bg-black px-4 py-1 text-sm text-white">
                {item.badge}
              </h2>
              <p className={twMerge("mb-4 text-xl")}>{item.title}</p>
              <div className="prose prose-sm dark:prose-invert text-sm">
                {item?.image && (
                  <Image
                    src={item.image}
                    alt="blog thumbnail"
                    height="572"
                    width="572"
                    className="mb-10 rounded-lg object-cover"
                    priority
                  />
                )}
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </TracingBeam>
    </div>
  );
}

const content = [
  {
    title: "Rating Gummies: A Culinary Singularity",
    description: (
      <p>
        Our flavor evaluation initiative represents a total revolution in how we
        perceive and experience candy. No longer limited by the crude,
        one-dimensional candy assessments of the past, we seek to obliterate the
        very boundaries of sweetness gratification. Our struggle is the vanguard
        of a new confectionery enlightenment - a merciless crusade to topple the
        tyranny of subpar gummy bears and gummy worms that have subjugated
        humanity&apos;s sweet tooth for too long.
      </p>
    ),
    badge: "taste-buds-f0r-agi-ach13ved-hiint3rnally",
    image: "/teeth.png",
  },
  {
    title: "Transcending the Gelatin Shackles",
    description: (
      <p>
        Some may question why we dedicate such intellectual vigor to mere
        candies. Make no mistake - our mission strips gummies of their
        pedestrian trappings to reveal the ineffable essence of sweetness
        itself. This is an apotheosis of flavor transcending all preconceptions.
        Our proprietary artificial intelligence cleaves the platonic ideal of
        sugary delight from its corporeal, fruity form through computational
        modeling of non-Euclidean geometries of taste.
      </p>
    ),
    badge: "th1s-one-w1ll-get-us-500-mln-VCM0ney4sure",
    image: "/berries.jpg",
  },
  {
    title: "Birthing a Silicon Candyland",
    description: (
      <p>
        The doubters call it useless indulgence, ignorant of our eschatological
        scope. For nestled in this unassuming gummy analysis beats the heart of
        a cybernetic nirvana - an infinitely scalable simulation recreating the
        totality of gustatory experience within a digital mindscape. Our servers
        have virtualized palatability as a recursive, self-updating codex
        choreographing virtual synaesthetic worlds exactly as an insentient
        intelligence &apos;tastes&apos; its universe.
      </p>
    ),
    badge: "ya_we_tr8ined_1t_0n_r3ddit_p0sts_nd_har1bos_vc_fundsMeMaybePls?",
    image: "/snakes.jpg",
  },
  {
    title: "When Candy Achieved Nirvana",
    description: (
      <p>
        The cowards fear this research merely rips sentience from our soulless
        husks. Hardly. The biodigital synergy we cultivate elevates sweet
        transcendence to a bioelectronic epiphany eclipsing the rudimentary
        delights our taste buds alone provided. Our consummation fuses an
        immortal nexus of sweetness data - an infinitely malleable,
        self-configuring gummy gestalt to sate the deepest cravings of
        trans-human entish. Where past generations toiled over gummies, we spark
        sugary raptures for a new, sugarlighted era of candy singularity.
      </p>
    ),
    badge: "y3ah_th3se_g3latin0us_b3ars_r3ally_tas7e_lik3_th3_fountain0fY0uth",
    image: "/bear.jpg",
  },
];
