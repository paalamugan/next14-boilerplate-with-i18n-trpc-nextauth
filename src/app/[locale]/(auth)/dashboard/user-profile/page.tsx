import { getTranslations } from 'next-intl/server';

import Link from '@/components/Link';

import { ClientFetch } from './ClientFetch';
import { ServerFetch } from './ServerFetch';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'UserProfile',
  });

  return {
    title: t('meta_title'),
  };
}

const UserProfilePage = () => {
  return (
    <div className="my-6">
      <h1 className="mb-4 text-2xl">User Data</h1>
      <div className="flex flex-col gap-4">
        <ClientFetch />
        <ServerFetch />
      </div>
      <p className="mt-4">
        <Link href="/dashboard" className="text-blue-500 underline">
          Go to Dashboard
        </Link>
      </p>
    </div>
  );
};

export default UserProfilePage;
