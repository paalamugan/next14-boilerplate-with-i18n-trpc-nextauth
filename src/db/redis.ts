import { Redis } from 'ioredis';

import { env } from '@/env';

const LOCAL_REDIS_URL =
  env.REDIS_URL || (await (await import('scripts/start-local-redis-server')).startRedisServer());
const globalForRedis = globalThis as unknown as { redis: Redis };

export const redis = globalForRedis.redis ?? new Redis(LOCAL_REDIS_URL);

if (process.env.NODE_ENV !== 'production') globalForRedis.redis = redis;
