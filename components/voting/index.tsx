import { db } from "@/db/db";
import { SparklesCore } from "../ui/sparkles";
import { Gummy, Vote } from "./vote";
import { VotingText } from "./voting-text";
import { gummies } from "@/db/schema/gummies";
import { asc, eq, or } from "drizzle-orm";

export async function Voting() {
  const initOptions = (await db
    .select()
    .from(gummies)
    .where(or(eq(gummies.id, 1), eq(gummies.id, 2)))
    .orderBy(asc(gummies.id))) as Gummy[];

  return (
    <div className="flex h-[80svh] flex-col lg:h-[100svh]">
      <VotingText />
      <div className="h-4 w-full">
        <SparklesCore
          id="divider"
          background="transparent"
          minSize={0.2}
          maxSize={1.5}
          className="h-full w-full bg-neutral-600"
          particleColor="#ffffff"
        />
      </div>
      <div className="h-full flex-1 bg-neutral-500">
        <Vote initOptions={initOptions} />
      </div>
    </div>
  );
}
