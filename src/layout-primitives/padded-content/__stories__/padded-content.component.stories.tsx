import { Button } from '@components/button';
import { Heading } from '@components/heading';
import { Text } from '@components/text';
// noinspection JSUnusedGlobalSymbols
import { Meta, StoryObj } from '@storybook/react';
import { ColumnStack } from '../../column-stack';
import { RowStack } from '../../row-stack';
import { PaddedContent } from '../padded-content.component';

const meta = {
  title: 'Layout Primitives/PaddedContent',
  component: PaddedContent,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    paddingOmitTop: {
      control: 'boolean',
    },

    paddingOmitBottom: {
      control: 'boolean',
    },

    paddingOmitSides: {
      control: 'boolean',
    },

    showTopBorder: {
      control: 'boolean',
    },

    showBottomBorder: {
      control: 'boolean',
    },
  },

  args: {},
} satisfies Meta<typeof PaddedContent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => (
    <PaddedContent {...args}>
      <Heading>Good Afternoon</Heading>
      <Text>Hello, there!</Text>
      <RowStack horizontalJustify="end">
        <Button>Save Changes</Button>
        <Button buttonStyle="link" variant="warning">
          Cancel
        </Button>
      </RowStack>
    </PaddedContent>
  ),
  parameters: {
    layout: 'fullscreen',
  },
};

export const MultipleInColumnStack: Story = {
  render: (args) => (
    <ColumnStack>
      <PaddedContent showBottomBorder {...args}>
        <Text>This padded content has a bottom border</Text>
      </PaddedContent>
      <PaddedContent paddingOmitTop {...args}>
        <Text>this padding content has no top padding</Text>
      </PaddedContent>
    </ColumnStack>
  ),
  parameters: {
    layout: 'fullscreen',
  },
};