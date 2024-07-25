import type { RichTranslationValues } from 'next-intl';
import type { FC } from 'react';

import Sidebar from '@/components/Containers/Sidebar';
import { useSiteNavigationConfig } from '@/hooks/server';
import type { NavigationKeys } from '@/types';

type WithSidebarProps = {
  navKeys: Array<NavigationKeys>;
  context?: Record<string, RichTranslationValues>;
};

const WithSidebar: FC<WithSidebarProps> = ({ navKeys, context }) => {
  const { getSideNavigation } = useSiteNavigationConfig();

  const mappedSidebarItems = getSideNavigation(navKeys, context).map(([, { label, items }]) => ({
    groupName: label,
    items: items.map(([, item]) => item),
  }));

  return <Sidebar groups={mappedSidebarItems} />;
};

export default WithSidebar;
