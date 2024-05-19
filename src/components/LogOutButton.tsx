'use client';

import { signOut } from 'next-auth/react';
import { useTranslations } from 'next-intl';

// import { useSession } from '@/stores/session-store';
// import { api } from '@/trpc/react';

const LogOutButton = () => {
  const t = useTranslations('DashboardLayout');
  // const session = useSession();
  // const signOutMutation = api.auth.signOut.useMutation({
  //   onSuccess() {
  //     session.update(null);
  //   },
  // });
  return (
    <button
      className="border-none text-gray-700 hover:text-gray-900"
      type="button"
      onClick={async () => {
        // signOutMutation.mutate();
        await signOut({
          callbackUrl: '/signin',
        });
      }}
    >
      {t('sign_out')}
    </button>
  );
};

export { LogOutButton };
