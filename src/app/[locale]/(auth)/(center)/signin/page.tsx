import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

import Link from '@/components/Link';

import { SignInForm } from './_components/SignInForm';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'SignIn',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

const SignInPage = (props: { searchParams: { callbackUrl: string | undefined } }) => {
  const { searchParams } = props;

  return (
    <div className="shadow-xl">
      <div className="my-6 flex min-h-full min-w-[30rem] flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Image
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
            width={12}
            height={12}
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <SignInForm callbackUrl={searchParams.callbackUrl} />
        </div>

        <p className="mt-6 text-center">
          <Link href="/" className="text-blue-700 hover:underline">
            Go to Home
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignInPage;
