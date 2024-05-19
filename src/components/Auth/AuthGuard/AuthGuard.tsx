'use client';

import { ArrowPathIcon } from '@heroicons/react/24/solid';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

import { usePathname, useRouter } from '@/lib/navigation';
import { useSession } from '@/stores/session-store';

type Props = {
  children: React.ReactNode;
};

export const AuthGuard: React.FC<Props> = ({ children }) => {
  const session = useSession();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (pathname === '/signin' && session.status === 'authenticated') {
      router.push('/dashboard');
    }

    if (session.status === 'unauthenticated') {
      router.push(`/signin?${searchParams.toString()}`);
    }
  }, [session.status, pathname, router, searchParams]);

  if (
    session.status === 'loading' ||
    (session.status === 'unauthenticated' && pathname !== '/signin')
  ) {
    return (
      <div className="flex h-screen items-center justify-center">
        <ArrowPathIcon className="size-6 animate-spin" />
      </div>
    );
  }

  return children;
};
