import { pgTable, text, serial, timestamp, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";
import { usersTable } from "./users";

export const internshipsTable = pgTable("internships", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull().references(() => usersTable.id, { onDelete: "cascade" }),
  company: text("company").notNull(),
  role: text("role").notNull(),
  location: text("location"),
  deadline: text("deadline"),
  status: text("status").notNull().default("Saved"),
  notes: text("notes"),
  salary: text("salary"),
  applicationLink: text("application_link"),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow().$onUpdate(() => new Date()),
});

export const insertInternshipSchema = createInsertSchema(internshipsTable).omit({ id: true, createdAt: true, updatedAt: true });
export type InsertInternship = z.infer<typeof insertInternshipSchema>;
export type Internship = typeof internshipsTable.$inferSelect;
