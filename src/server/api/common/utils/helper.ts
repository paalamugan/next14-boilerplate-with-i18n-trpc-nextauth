import { cookies } from 'next/headers';

import {
  SESSION_TOKEN_COOKIE_KEY,
  USER_ID_COOKIE_KEY,
} from '../../routers/auth/service/auth.service';
import type { TRPCContext } from '../../trpc';

export const getUserIdFromAuthToken = (ctx: TRPCContext) => {
  const { token } = ctx;

  if (token) {
    return {
      encodedSessionToken: encodeURIComponent(token.sessionToken || ''),
      userId: token.id,
      validateSessionToken: false,
    };
  }

  const encodedSessionToken = cookies().get(SESSION_TOKEN_COOKIE_KEY)?.value;
  const userId = cookies().get(USER_ID_COOKIE_KEY)?.value;

  return {
    encodedSessionToken,
    userId,
    validateSessionToken: true,
  };
};
