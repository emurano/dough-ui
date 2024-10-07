import { Meta, StoryObj } from '@storybook/react';
import { Input } from '@src/components/input';
import { ColumnStack, RowStack } from "../../../layout-primitives";
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

export const NextToTextField: Story = {
  name: 'next to text field',
  render: ({ children, ...args }) => (
    <RowStack>
      <Label {...args}>{children}</Label>
      <Input type="text" />
    </RowStack>
  ),
};

export const AboveTextField: Story = {
  name: 'above text field',
  render: ({ children, ...args }) => (
    <ColumnStack horizontalAlignment='start' gapSize='extra-small'>
      <Label {...args}>{children}</Label>
      <Input type="text" />
    </ColumnStack>
  ),
};
