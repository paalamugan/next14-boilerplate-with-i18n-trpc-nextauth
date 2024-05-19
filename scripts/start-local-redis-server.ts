import { RedisMemoryServer } from 'redis-memory-server';

const redisServer = new RedisMemoryServer({
  autoStart: false,
  instance: {},
});

export const startRedisServer = async () => {
  const instance = redisServer.getInstanceInfo();
  if (!instance) {
    await redisServer.start();
    const host = await redisServer.getHost();
    const port = await redisServer.getPort();
    return `redis://${host}:${port}`;
  }

  return `redis://${instance.ip}:${instance.port}`;
};
