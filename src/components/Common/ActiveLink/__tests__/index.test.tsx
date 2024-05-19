/* eslint-disable tailwindcss/no-custom-classname */
import { render, screen } from '@testing-library/react';

import { usePathname } from '@/lib/navigation';

import ActiveLink from '..';

jest.mock('@/lib/navigation', () => ({
  ...jest.requireActual('@/lib/navigation'),
  usePathname: jest.fn(),
}));

const usePathnameMock = jest.mocked(usePathname);

describe('ActiveLink', () => {
  it('renders as localized link', async () => {
    render(
      <ActiveLink className="link" activeClassName="active" href="/link">
        Link
      </ActiveLink>
    );

    await expect(screen.findByText('Link')).resolves.toHaveAttribute('href', '/link');
  });

  it('ignores active class when href not matches location.href', async () => {
    render(
      <ActiveLink className="link" activeClassName="active" href="/not-link">
        Link
      </ActiveLink>
    );

    await expect(screen.findByText('Link')).resolves.toHaveAttribute('class', 'link');
  });

  it('sets active class when href matches location.href', async () => {
    const link = '/link';
    usePathnameMock.mockReturnValue(link);
    render(
      <ActiveLink className="link" activeClassName="active" href="/link">
        Link
      </ActiveLink>
    );

    await expect(screen.findByText('Link')).resolves.toHaveAttribute('class', 'link active');
  });
});
