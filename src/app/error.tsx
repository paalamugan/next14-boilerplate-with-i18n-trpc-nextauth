'use client';

import { ArrowRightIcon } from '@heroicons/react/24/solid';
import { captureException } from '@sentry/nextjs';
import { useTranslations } from 'next-intl';
import { type FC, useEffect } from 'react';

import Button from '@/components/Common/Button';
import CenteredLayout from '@/layouts/Centered';

const ErrorPage: FC<{ error: Error }> = ({ error }) => {
  const t = useTranslations();

  useEffect(() => {
    captureException(error);
  }, [error]);

  return (
    <CenteredLayout>
      <main className="flex flex-col gap-3 text-center">
        <h1 className="text-4xl font-semibold"> 500 </h1>
        <h1 className="special mt-3">{t('layouts.error.internalServerError.title')}</h1>
        <p className="mt-3 max-w-sm text-center text-lg">
          {t('layouts.error.internalServerError.description')}
        </p>
        <Button href="/">
          {t('layouts.error.backToHome')}
          <ArrowRightIcon />
        </Button>
      </main>
    </CenteredLayout>
  );
};

export default ErrorPage;
