import Link from "next/link";

import { ModeToggle } from "@/components/mode-toggle";

export default async function TopBar() {
  return (
    <div className="flex items-center gap-5 p-4 md:px-10">
      <Link className="mr-auto" href="/">
        <h1 className="relative bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-center font-bold text-transparent md:text-2xl">
          OpenGummy
        </h1>
      </Link>
      <Link href="#vote">
        <p className="text-sm">Vote</p>
      </Link>
      <Link href="#results">
        <p className="text-sm">Results</p>
      </Link>
      <ModeToggle />
    </div>
  );
}
