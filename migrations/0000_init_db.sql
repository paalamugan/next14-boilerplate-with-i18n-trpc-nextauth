CREATE TABLE `guestbooks` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`body` text NOT NULL,
	`created_at` integer DEFAULT (strftime ('%s', 'now')),
	`updated_at` integer DEFAULT (strftime ('%s', 'now'))
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` text PRIMARY KEY NOT NULL,
	`username` text NOT NULL,
	`password` text NOT NULL,
	`created_at` integer DEFAULT (strftime ('%s', 'now')),
	`updated_at` integer DEFAULT (strftime ('%s', 'now'))
);
--> statement-breakpoint
CREATE UNIQUE INDEX `users_username_unique` ON `users` (`username`);