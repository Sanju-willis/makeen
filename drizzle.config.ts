// src\drizzle.config.ts
import type { Config } from 'drizzle-kit';
import { config } from 'dotenv';
config();

export default {
  schema: './src/db/schema',
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
} satisfies Config;
