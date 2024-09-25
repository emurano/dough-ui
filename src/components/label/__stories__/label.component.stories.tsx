import { Meta, StoryObj } from '@storybook/react';
import { Label } from '../label.component';

const meta = {
  title: 'Components/Label',
  component: Label,
  argTypes: {
    children: {
      control: 'text',
    },
  },

  args: {
    children: 'Food Preference',
  },
} satisfies Meta<typeof Label>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  name: 'example',
  render: ({ children, ...args }) => <Label {...args}>{children}</Label>,
};
