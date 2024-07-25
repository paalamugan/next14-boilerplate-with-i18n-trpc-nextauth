import { getTranslations } from 'next-intl/server';

import { siteConfig } from '@/helpers/app.config';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'Index',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

const Index = () => {
  return (
    <div>
      <p>
        Explore the GitHub project for more information about{' '}
        <a
          className="text-blue-700 hover:border-b-2 hover:border-blue-700"
          href={siteConfig.github.repoLink}
          target="_blank"
        >
          Next14 with Next-Auth and TRPC Boilerplate
        </a>
        .
      </p>
      <h2 className="mt-5 text-2xl font-bold">
        Boilerplate Code for the Next14 with Next Auth and TRPC Project with Tailwind CSS
      </h2>
      <p className="text-base">
        <span role="img" aria-label="rocket">
          🚀
        </span>{' '}
        Next14 with Next-Auth Boilerplate is a developer-friendly starter code for Next.js projects,
        built with Tailwind CSS, and TypeScript.{' '}
        <span role="img" aria-label="zap">
          ⚡️
        </span>{' '}
        Made with developer experience first: Next.js, TypeScript, ESLint, Prettier, Husky,
        Lint-Staged, Jest, Testing Library, Commitlint, VSCode, PostCSS, Tailwind CSS,
        Authentication with , Database with DrizzleORM (SQLite, PostgreSQL, and MySQL) and{' '}
        <a
          className="text-blue-700 hover:border-b-2 hover:border-blue-700"
          href="https://turso.tech"
          target="_blank"
        >
          Turso
        </a>
        and
        <a
          className="text-blue-700 hover:border-b-2 hover:border-blue-700"
          href="https://trpc.io"
          target="_blank"
        >
          TRPC
        </a>
        , Error Monitoring with{' '}
        <a
          className="text-blue-700 hover:border-b-2 hover:border-blue-700"
          href="https://sentry.io/for/nextjs/?utm_source=github&amp;utm_medium=paid-community&amp;utm_campaign=general-fy25q1-nextjs&amp;utm_content=github-banner-nextjsboilerplate-logo"
          target="_blank"
        >
          Sentry
        </a>
        , Logging with Pino.js and Log Management with{' '}
        <a
          className="text-blue-700 hover:border-b-2 hover:border-blue-700"
          href="https://betterstack.com/?utm_source=github&amp;utm_medium=sponsorship&amp;utm_campaign=next-js-boilerplate"
          target="_blank"
        >
          Better Stack
        </a>
        , Monitoring as Code with Checkly, Storybook, Multi-language (i18n), and more.
      </p>
    </div>
  );
};
export default Index;
