// noinspection JSUnusedGlobalSymbols
import { Meta, StoryObj } from '@storybook/react';
import { Button } from "@components/button";
import { Heading } from '@components/heading';
import { ParagraphText } from '@components/paragraph-text';
import { Alignments } from "../../../type/alignment.type";
import { BlockModes } from "../../../type/block-mode.type";
import { GapSizes } from '../../../type/gap-size.type';
import { Justifies } from "../../../type/justify.type";
import { RowStack } from '../row-stack.component';

const meta = {
  title: 'Layout Primitives/RowStack',
  component: RowStack,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    gapSize: {
      control: 'select',
      options: [...GapSizes],
    },
    horizontalJustify: {
      control: 'select',
      options: [...Justifies],
    },
    verticalAlignment: {
      control: 'select',
      options: [...Alignments],
    },
    blockMode: {
      control: 'select',
      options: [...BlockModes],
    }
  },

  args: {},
} satisfies Meta<typeof RowStack>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => (
    <RowStack {...args}>
      <Heading>Good Afternoon</Heading>
      <ParagraphText>Hello, there!</ParagraphText>
      <Button>Hello</Button>
    </RowStack>
  ),
};
