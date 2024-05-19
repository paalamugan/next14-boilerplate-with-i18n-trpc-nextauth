import { ArrowUpRightIcon } from '@heroicons/react/24/solid';
import type { FC, HTMLAttributeAnchorTarget, PropsWithChildren } from 'react';

import ActiveLink from '@/components/Common/ActiveLink';
import { cn } from '@/lib/cn';

import styles from './index.module.css';

type NavItemType = 'nav' | 'footer';

type NavItemProps = {
  href: string;
  type?: NavItemType;
  className?: string;
  target?: HTMLAttributeAnchorTarget | undefined;
};

const NavItem: FC<PropsWithChildren<NavItemProps>> = ({
  href = '',
  type = 'nav',
  children,
  className,
  target,
}) => (
  <ActiveLink
    href={href}
    className={cn(styles.navItem, styles[type], className)}
    activeClassName={styles.active}
    allowSubPath={href.startsWith('/')}
    target={target}
  >
    <span className={styles.label}>{children}</span>

    {((type === 'nav' && href.startsWith('http')) || target === '_blank') && (
      <ArrowUpRightIcon className={styles.icon} />
    )}
  </ActiveLink>
);

export default NavItem;
