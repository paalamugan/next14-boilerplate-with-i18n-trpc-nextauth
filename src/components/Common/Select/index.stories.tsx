import type { Meta as MetaObj, StoryObj } from '@storybook/react';

import Select from '@/components/Common/Select';

type Story = StoryObj<typeof Select>;
type Meta = MetaObj<typeof Select>;

export const Default: Story = {
  args: {
    values: ['v20.8.0', 'v19.9.0', 'v18.18.0', 'v17.9.1', 'v16.20.2'],
    defaultValue: 'v16.20.2',
    label: 'Select App version',
  },
};

export const WithoutLabel: Story = {
  args: {
    values: ['v20.8.0', 'v19.9.0', 'v18.18.0', 'v17.9.1', 'v16.20.2'],
    defaultValue: 'v16.20.2',
  },
};

export const DropdownLabel: Story = {
  args: {
    values: [
      {
        label: 'Getting Started',
        items: [
          {
            value: 'section-1',
            label: 'Getting Started',
          },
          {
            value: 'section-2',
            label: 'Installation',
          },
          {
            value: 'section-3',
            label: 'Configuration',
          },
        ],
      },
    ],
    placeholder: 'Select a guide',
    label: 'Getting Started',
  },
};

export default { component: Select } as Meta;
