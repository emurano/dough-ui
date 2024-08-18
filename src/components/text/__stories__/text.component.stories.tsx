// noinspection JSUnusedGlobalSymbols

import { Meta, StoryObj } from '@storybook/react';
import { Text } from '../text.component';
import { Sizes } from '@type/size.type';

const meta = {
  title: 'Components/Text',
  component: Text,
  // tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: [...Sizes],
    },

    children: {
      control: 'text',
    }
  },

  args: {
    size: 'medium',
    children: 'The quick brown fox jumped over the lazy dog'
  }
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => <Text {...args}>{args.children}</Text>,
};
