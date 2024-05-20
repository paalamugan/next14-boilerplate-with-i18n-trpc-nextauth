import type { NextRequest } from 'next/server';

import { getServerAuthSession } from '@/server/auth';

// Review if we need this, and why
function stripContentEncoding(result: Response) {
  const responseHeaders = new Headers(result.headers);
  responseHeaders.delete('content-encoding');

  return new Response(result.body, {
    status: result.status,
    statusText: result.statusText,
    headers: responseHeaders,
  });
}

async function handler(request: NextRequest) {
  const session = await getServerAuthSession();

  const headers = new Headers(request.headers);
  headers.set('Authorization', `Bearer ${session?.accessToken}`);

  const backendUrl = process.env.THIRD_PARTY_BACKEND_ENDPOINT ?? 'https://my-backend.authjs.dev';

  const url = request.nextUrl.href.replace(request.nextUrl.origin, backendUrl);
  const result = await fetch(url, { headers, body: request.body });

  return stripContentEncoding(result);
}

export const dynamic = 'force-dynamic';

export { handler as GET, handler as POST };
