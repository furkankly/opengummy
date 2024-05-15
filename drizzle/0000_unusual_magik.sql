CREATE TABLE IF NOT EXISTS "gummies" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255),
	"votes" integer DEFAULT 0
);
