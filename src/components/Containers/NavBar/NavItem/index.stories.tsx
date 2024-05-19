import type { Meta as MetaObj, StoryObj } from '@storybook/react';

import NavItem from '@/components/Containers/NavBar/NavItem';

type Story = StoryObj<typeof NavItem>;
type Meta = MetaObj<typeof NavItem>;

export const Default: Story = {
  args: {
    href: '/dashboard',
    children: 'Dashboard',
  },
};

export const WithExternalLink: Story = {
  args: {
    href: 'https://paalamugan.com',
    children: 'Website',
  },
};

export const WithChildren: Story = {
  args: {
    href: 'https://paalamugan.com',
    children: <b>Website</b>,
  },
};

export const FooterItem: Story = {
  args: {
    href: '/about',
    children: 'About',
    type: 'footer',
  },
};

export default { component: NavItem } as Meta;
