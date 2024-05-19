const navigation = {
  topNavigation: {
    dashboard: {
      link: '/dashboard',
      label: 'components.containers.navBar.links.dashboard',
    },
    about: {
      link: '/about',
      label: 'components.containers.navBar.links.about',
    },
    portfolio: {
      link: '/portfolio',
      label: 'components.containers.navBar.links.portfolio',
    },
  },
  sideNavigation: {
    about: {
      label: 'components.navigation.about.links.about',
      items: {
        about: {
          link: '/about',
          label: 'components.navigation.about.links.aboutSide',
        },
        branding: {
          link: '/about/branding',
          label: 'components.navigation.about.links.branding',
        },
      },
    },
  },
};

export default navigation;
