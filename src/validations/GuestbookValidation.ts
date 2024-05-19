import { z } from 'zod';

export const GuestbookValidation = z.object({
  name: z.string().min(1),
  body: z.string().min(1),
});

export const EditGuestbookValidation = z.object({
  id: z.coerce.number(),
  name: z.string().min(1),
  body: z.string().min(1),
});

export const DeleteGuestbookValidation = z.object({
  id: z.coerce.number(),
});
