import { Button } from '@components/button';
import { ParagraphText } from '@components/paragraph-text';
import { Text } from '@components/text';
import { ColumnStack } from '@layout-primitives/column-stack';
import { RowStack } from '@layout-primitives/row-stack';
import { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { SidebarPageLayout } from '../sidebar-page-layout.component';

const meta = {
  title: 'PageLayouts / SidebarPageLayout',
  component: SidebarPageLayout,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    leftSidebarIsOpen: { control: 'boolean' },
    leftSidebarShadow: { control: 'boolean' },
    leftSidebarWidth: { control: 'number' },

    rightSidebarIsOpen: { control: 'boolean' },
    rightSidebarShadow: { control: 'boolean' },
    rightSidebarWidth: { control: 'number' },

    children: {
      control: 'text',
    },
  },

  args: {
    children: (
      <>
        <Text>This is the content of the page</Text>
        <ExpandableContent />
      </>
    ),
    leftSidebarContent: (
      <>
        <Text>This is the left sidebar content</Text>
        <ExpandableContent />
      </>
    ),
    leftSidebarWidth: 300,
    leftSidebarIsOpen: true,

    rightSidebarContent: (
      <>
        <Text>This is the right sidebar content</Text>
        <ExpandableContent />
      </>
    ),
    rightSidebarWidth: 300,
    rightSidebarIsOpen: true,
  },
} satisfies Meta<typeof SidebarPageLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BothSides: Story = {
  render: (args) => (
    <SidebarPageLayout {...args} />
  ),
};

export const LeftOnly: Story = {
  render: (args) => <SidebarPageLayout {...args} />,
  args: {
    rightSidebarContent: undefined,
  },
};

export const RightOnly: Story = {
  render: (args) => <SidebarPageLayout {...args} />,
  args: {
    leftSidebarContent: undefined,
  },
};

function ExpandableContent() {
  const [numParagraphs, setNumParagraphs] = useState(1);

  return (
    <ColumnStack>
      <RowStack>
        <Button onClick={() => setNumParagraphs(numParagraphs + 1)}>Add paragraph</Button>
        <Button onClick={() => setNumParagraphs(numParagraphs - 1)}>Remove paragraph</Button>
      </RowStack>

      <Text>
        {Array.from({ length: numParagraphs }, (_, i) => (
          <ParagraphText key={i}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </ParagraphText>
        ))}
      </Text>

    </ColumnStack>
  );
}