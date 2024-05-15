"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import * as cases from "@luca/cases";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import Image, { StaticImageData } from "next/image";
import { spaceMono } from "@/app/fonts";
import { imgSrc } from "./options";
import { vote } from "./actions";

export type Gummy = {
  id: number;
  name: string;
  votes: number;
};

export function Vote({ initOptions }: { initOptions: Gummy[] }) {
  const [options, setOptions] = useState(initOptions);
  const [currId, setCurrId] = useState(2);

  const queryClient = useQueryClient();
  const { mutateAsync } = useMutation({
    mutationFn: vote,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["results"] });
    },
  });

  const handleVote = async (id: number) => {
    let nextId = currId + 1;
    if (nextId === id) {
      nextId = id + 1;
    }
    nextId %= 20;
    if (nextId === 0) {
      nextId = id === 1 ? 2 : 1;
    }

    const newOptions = await mutateAsync({ id, nextId });
    setOptions(newOptions as Gummy[]);
    setCurrId(nextId);
  };

  return (
    <div className="mx-auto flex h-full w-full flex-1 flex-row items-center justify-center gap-4 p-4 lg:max-w-screen-lg lg:p-10">
      {options.map((gummy, index) => {
        return (
          <Card
            key={gummy.id}
            title={cases.titleCase(gummy.name)}
            icon={
              <Image
                src={imgSrc(gummy.name) as StaticImageData}
                alt={gummy.name}
                fill
                sizes="(max-width: 640px) 140px, 280px)"
              />
            }
            handleVote={() => handleVote(gummy.id)}
          >
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName={
                index === 1 ? "bg-orange-600" : "bg-violet-600"
              }
              dotSize={3}
              {...(index === 1 && { colors: [[255, 200, 40]] })}
            />
          </Card>
        );
      })}
    </div>
  );
}

const Card = ({
  title,
  icon,
  children,
  handleVote,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  handleVote: () => Promise<void>;
}) => {
  const [open, setOpen] = React.useState(false);
  return (
    <div
      onClick={() => {
        setOpen(true);
        setTimeout(async () => {
          await handleVote();
          setOpen(false);
        }, 1000);
      }}
      className="group/canvas-card relative mx-auto flex h-full w-full max-w-sm cursor-pointer items-center justify-center border border-black/[0.2] p-4 dark:border-white/[0.2]"
    >
      <Icon className="absolute -left-3 -top-3 h-6 w-6 text-black dark:text-white" />
      <Icon className="absolute -bottom-3 -left-3 h-6 w-6 text-black dark:text-white" />
      <Icon className="absolute -right-3 -top-3 h-6 w-6 text-black dark:text-white" />
      <Icon className="absolute -bottom-3 -right-3 h-6 w-6 text-black dark:text-white" />

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 h-full w-full"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 flex h-full w-full items-center justify-center overflow-hidden">
        <div
          data-icon={!open}
          className="mx-auto data-[icon=false]:opacity-0 data-[icon=false]:transition data-[icon=false]:duration-500"
        >
          {icon}
        </div>
        <h2
          data-title={open}
          className={`z-10 mt-4 w-full text-center text-xl font-bold text-neutral-200 opacity-0 data-[title=true]:opacity-100 data-[title=true]:transition data-[title=true]:duration-500 ${spaceMono.className}`}
        >
          {title}
        </h2>
      </div>
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
