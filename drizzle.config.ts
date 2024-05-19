import type { Config } from 'drizzle-kit';

import { env } from '@/env';

const config: Config = {
  out: './migrations',
  schema: './src/db/models/schema.ts',
  dbCredentials: {
    url: env.DATABASE_URL,
  },
  dialect: 'sqlite',
  migrations: {
    table: 'migrations',
    schema: 'public',
  },
};

export default config;
