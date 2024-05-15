"use server";

import { db } from "@/db/db";
import { gummies } from "@/db/schema/gummies";
import { desc } from "drizzle-orm";

export async function getResults() {
  const data = await db
    .select({
      id: gummies.id,
      name: gummies.name,
      votes: gummies.votes,
    })
    .from(gummies)
    .orderBy(desc(gummies.votes));
  return data;
}
