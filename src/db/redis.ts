import { Redis } from 'ioredis';
import { startRedisServer } from 'scripts/start-local-redis-server';

import { env } from '@/env';

const LOCAL_REDIS_URL = await startRedisServer();
const globalForRedis = globalThis as unknown as { redis: Redis };

const REDIS_URL = env.REDIS_URL ?? LOCAL_REDIS_URL;

export const redis = globalForRedis.redis ?? new Redis(REDIS_URL);

if (env.NODE_ENV !== 'production') globalForRedis.redis = redis;
