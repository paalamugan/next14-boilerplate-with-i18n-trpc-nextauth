import { useTranslations } from 'next-intl';

import { siteConfig } from '@/helpers/app.config';

const BaseTemplate = (props: {
  leftNav: React.ReactNode;
  rightNav?: React.ReactNode;
  children: React.ReactNode;
}) => {
  const t = useTranslations('BaseTemplate');

  return (
    <div className="w-full px-1 text-gray-700 antialiased">
      <div className="mx-auto grid size-full max-w-screen-lg grid-cols-[1fr] grid-rows-[auto_1fr_auto]">
        <header className="border-b border-gray-300">
          <div className="pb-8 pt-16">
            <h1 className="text-3xl font-bold text-gray-900">{siteConfig.title}</h1>
            <h2 className="text-xl">{t('description')}</h2>
          </div>

          <div className="flex justify-between">
            <nav>
              <ul className="flex flex-wrap gap-x-5 text-xl">{props.leftNav}</ul>
            </nav>

            <nav>
              <ul className="flex flex-wrap gap-x-5 text-xl">{props.rightNav}</ul>
            </nav>
          </div>
        </header>

        <main>{props.children}</main>

        <footer className="border-t border-gray-300 py-8 text-center text-sm">
          © Copyright {new Date().getFullYear()}{' '}
          <a
            href={siteConfig.github.repoLink}
            className="text-blue-700 hover:border-b hover:border-blue-700"
            target="_blank"
          >
            {siteConfig.title}
          </a>
          . All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export { BaseTemplate };
