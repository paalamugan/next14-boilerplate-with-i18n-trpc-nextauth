import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ThemeToggle from '../index';

let mockCurrentTheme = 'light';

const toggleTheme = () => {
  mockCurrentTheme = mockCurrentTheme === 'light' ? 'dark' : 'light';
};

const setup = () => {
  render(<ThemeToggle onClick={toggleTheme} />);
};

describe('ThemeToggle', () => {
  let toggle: HTMLElement;

  beforeEach(() => {
    mockCurrentTheme = 'light';

    setup();
    toggle = screen.getByRole('button');
  });

  it('switches dark theme to light theme', async () => {
    mockCurrentTheme = 'dark';
    await userEvent.click(toggle);
    expect(mockCurrentTheme).toBe('light');
  });

  it('switches light theme to dark theme', async () => {
    await userEvent.click(toggle);
    expect(mockCurrentTheme).toBe('dark');
  });
});
