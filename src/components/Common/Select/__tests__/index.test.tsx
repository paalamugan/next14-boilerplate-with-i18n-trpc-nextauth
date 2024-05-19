import { render, screen } from '@testing-library/react';

import Select from '../index';

describe('Select', () => {
  const values = ['Option 1', 'Option 2', 'Option 3'];
  const defaultValue = 'Option 1';
  const placeholder = 'Select an option';
  const label = 'Option label';
  const onChange = jest.fn();

  global.ResizeObserver = jest.fn().mockImplementation(() => ({
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
  }));

  it('renders the label when provided', () => {
    render(
      <Select
        values={values}
        defaultValue={defaultValue}
        placeholder={placeholder}
        label={label}
        onChange={onChange}
      />
    );

    const element = screen.getByLabelText(label);
    expect(element).toBeInTheDocument();
  });

  it('renders the default value when provided', () => {
    render(
      <Select
        values={values}
        defaultValue={defaultValue}
        placeholder={placeholder}
        label={label}
        onChange={onChange}
      />
    );

    const element = screen.getByText(defaultValue);
    expect(element).toBeInTheDocument();
  });

  it('renders the placeholder when default value is not provided', () => {
    render(<Select values={values} placeholder={placeholder} label={label} onChange={onChange} />);

    const element = screen.getByText(placeholder);
    expect(element).toBeInTheDocument();
  });
});
