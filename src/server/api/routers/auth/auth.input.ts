import { z } from 'zod';

export const LoginInput = z.object({
  credentials: z.object({
    username: z.string(),
    password: z.string(),
  }),
});
export type LoginInputType = z.infer<typeof LoginInput>;
