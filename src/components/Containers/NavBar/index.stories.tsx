import type { Meta as MetaObj, StoryObj } from '@storybook/react';

import NavBar from '@/components/Containers/NavBar';

type Story = StoryObj<typeof NavBar>;
type Meta = MetaObj<typeof NavBar>;

export const Default: Story = {
  args: {
    navItems: [
      {
        text: 'Home',
        link: '/',
      },
      {
        text: 'Dashboard',
        link: '/dashboard',
      },
      {
        text: 'Products',
        link: '/products',
      },
      {
        text: 'About',
        link: '/about',
      },
    ],
    languages: {
      availableLanguages: [
        { name: 'English', code: 'en' },
        { name: 'French', code: 'fr' },
        { name: 'Spanish', code: 'es' },
      ],
      currentLanguage: 'en',
    },
    onThemeTogglerClick: () => {},
  },
};

export default { component: NavBar } as Meta;
