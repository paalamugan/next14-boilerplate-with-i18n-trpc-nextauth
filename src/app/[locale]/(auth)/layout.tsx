import { AuthGuard } from '@/components/Auth/AuthGuard';
import { UserStoreInitializer } from '@/components/Auth/UserStoreInitializer';
import { getMe } from '@/server/helpers';

type AuthLayoutProps = {
  children: React.ReactNode;
};
const AuthLayout = async ({ children }: AuthLayoutProps) => {
  const user = await getMe();

  return (
    <>
      <UserStoreInitializer user={user} />
      <AuthGuard>{children}</AuthGuard>
    </>
  );
};

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default AuthLayout;
