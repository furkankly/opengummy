import { pgTable, varchar, integer, serial } from "drizzle-orm/pg-core";

export const gummies = pgTable("gummies", {
  id: serial("id").notNull().primaryKey(),
  name: varchar("name", { length: 255 }),
  votes: integer("votes").default(0),
});
