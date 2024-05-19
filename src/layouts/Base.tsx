'use client';

import type { FC, PropsWithChildren } from 'react';

import { NotificationProvider } from '@/providers/NotificationProvider';

import styles from './layouts.module.css';

type BaseLayoutProps = PropsWithChildren;
const BaseLayout: FC<BaseLayoutProps> = ({ children }) => {
  return (
    <NotificationProvider viewportClassName="absolute top-0 right-0 list-none">
      <div className={styles.baseLayout}>{children}</div>
    </NotificationProvider>
  );
};

export default BaseLayout;
