import {
  integer,
  uuid,
  pgTable,
  varchar,
  text,
  pgEnum,
  jsonb,
  date,
  timestamp,
  boolean,
  numeric,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

export const organizationsTable = pgTable("organizations", {
  id: uuid("id").defaultRandom().primaryKey(),
  firstname: varchar("firstname", { length: 50 }).notNull(),
  lastname: varchar("lastname", { length: 50 }).notNull(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  nin: varchar("nin", { length: 11 }).notNull().unique(),
  organization_name: varchar("organization_name", { length: 100 })
    .notNull()
    .unique(),
  country: varchar("country").notNull().default("Nigeria"),
  postal_code: varchar("postal_code", { length: 10 }).notNull(),
  password: varchar("password", { length: 255 }).notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});
