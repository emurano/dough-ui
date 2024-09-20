// noinspection JSUnusedGlobalSymbols

import { Meta, StoryObj } from '@storybook/react';
import { Button } from '@components/button';
import { Heading } from '@components/heading/heading.component';
import { ParagraphText } from '@components/paragraph-text';
import { Alignments } from '../../../type/alignment.type';
import { BlockModes } from '../../../type/block-mode.type';
import { GapSizes } from '../../../type/gap-size.type';
import { Justifies } from '../../../type/justify.type';
import { ColumnStack } from '../column-stack.component';

const meta = {
  title: 'Layout Primitives/ColumnStack',
  component: ColumnStack,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    gapSize: {
      control: 'select',
      options: [...GapSizes],
    },
    horizontalAlignment: {
      control: 'select',
      options: [...Alignments],
    },
    verticalJustify: {
      control: 'select',
      options: [...Justifies],
    },
    blockMode: {
      control: 'select',
      options: [...BlockModes],
    },
  },

  args: {},
} satisfies Meta<typeof ColumnStack>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => (
    <ColumnStack {...args}>
      <Heading>Good Afternoon</Heading>
      <ParagraphText>Hello, there!</ParagraphText>
      <Button>Hello</Button>
    </ColumnStack>
  ),
};
