"use server";
import { db } from "@/db/db";
import { gummies } from "@/db/schema/gummies";
import { asc, eq, or, sql } from "drizzle-orm";

export async function vote({ id, nextId }: { id: number; nextId: number }) {
  await db
    .update(gummies)
    .set({ votes: sql`${gummies.votes} + 1` })
    .where(eq(gummies.id, id));

  const options = await db
    .select()
    .from(gummies)
    .where(or(eq(gummies.id, id), eq(gummies.id, nextId)))
    .orderBy(asc(gummies.id));

  return options;
}
