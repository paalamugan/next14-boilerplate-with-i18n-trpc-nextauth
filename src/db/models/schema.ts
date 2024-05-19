/* eslint-disable prettier/prettier */
import { sql } from 'drizzle-orm';
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const GuestbookSchema = sqliteTable('guestbooks', {
  id: integer('id').primaryKey(),
  name: text('name').notNull(),
  body: text('body').notNull(),
  createdAt: integer('created_at', { mode: 'timestamp' }).default(sql`(strftime ('%s', 'now'))`),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).default(sql`(strftime ('%s', 'now'))`),
});

export const UserSchema = sqliteTable('users', {
  id: text('id').primaryKey(),
  username: text('username').notNull().unique(),
  password: text('password').notNull(),
  createdAt: integer('created_at', { mode: 'timestamp' }).default(sql`(strftime ('%s', 'now'))`),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).default(sql`(strftime ('%s', 'now'))`),
});

export type UserSchemaType = typeof UserSchema.$inferSelect;
