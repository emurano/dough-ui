// noinspection JSUnusedGlobalSymbols

import { Meta, StoryObj } from '@storybook/react';
import { SizeModes } from '../../../type/size-mode.type.ts';
import { Text } from '../text.component';
import { Sizes } from '../../../type/size.type';

const meta = {
  title: 'Components/Text',
  component: Text,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    size: {
      control: 'select',
      options: [...Sizes],
    },

    sizeMode: {
      control: 'select',
      options: [...SizeModes],
    },

    children: {
      control: 'text',
    },
  },

  args: {
    size: 'medium',
    sizeMode: 'parent-relative',
    children: 'The quick brown fox jumped over the lazy dog',
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => <Text {...args}>{args.children}</Text>,
};

export const WithinParentWithRelative: Story = {
  name: 'Within parent with relative size',
  render: (args) => (
    <div style={{ fontSize: '50px' }}>
      Raw text (font-size 50px)
      <br />
      <Text {...args}>{args.children}</Text>
    </div>
  ),
  args: {
    sizeMode: 'parent-relative',
  },
};

export const LargeExample: Story = {
  name: 'Large Text',
  render: (args) => <Text {...args}>{args.children}</Text>,
  args: {
    size: 'large',
    sizeMode: undefined,
  },
};

export const ParentRelativeLargeExample: Story = {
  name: 'Parent relative with large text',
  render: (args) => (
    <div style={{ fontSize: '25px' }}>
      Raw text (font-size 25px)
      <br />
      <Text {...args}>{args.children}</Text>
    </div>
  ),
  args: {
    size: 'large',
    sizeMode: 'parent-relative',
  },
};

export const ParentRelativeSmallExample: Story = {
  name: 'Parent relative with small text',
  render: (args) => (
    <div style={{ fontSize: '25px' }}>
      Raw text (font-size 25px)
      <br />
      <Text {...args}>{args.children}</Text>
    </div>
  ),
  args: {
    size: 'small',
    sizeMode: 'parent-relative',
  },
};

export const GloballyRelativeLargeExample: Story = {
  name: 'Parent relative with large text',
  render: (args) => (
    <div style={{ fontSize: '25px' }}>
      Raw text (font-size 25px)
      <br />
      <Text {...args}>{args.children}</Text>
    </div>
  ),
  args: {
    size: 'large',
    sizeMode: 'globally-relative',
  },
};

export const GloballyRelativeSmallExample: Story = {
  name: 'Parent relative with small text',
  render: (args) => (
    <div style={{ fontSize: '25px' }}>
      Raw text (font-size 25px)
      <br />
      <Text {...args}>{args.children}</Text>
    </div>
  ),
  args: {
    size: 'small',
    sizeMode: 'globally-relative',
  },
};
