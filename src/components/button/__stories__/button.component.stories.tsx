import { SizeModes, Sizes, Variants } from "@src/type";
import { Meta, StoryObj } from '@storybook/react';
import { ColumnStack, RowStack } from '../../../layout-primitives';
import { Button, ButtonStyles } from "../button.component";

const meta = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    children: {
      control: 'text',
    },

    variant: {
      control: 'select',
      options: Variants,
    },

    size: {
      control: 'select',
      options: [...Sizes],
    },

    sizeMode: {
      control: 'select',
      options: [...SizeModes],
    },

    buttonStyle: {
      control: 'select',
      options: [...ButtonStyles],
    },

    onPress: {
      action: 'onPress',
    },
  },

  args: {
    children: 'Save Changes',
    variant: 'primary',
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  name: 'example',
  render: ({ children, ...args }) => <Button {...args}>{children}</Button>,
};

export const Multiple: Story = {
  name: 'multiple buttons',
  render: ({ children, ...args }) => (
    <RowStack blockMode="inline">
      <Button {...args} variant="primary">
        {children}
      </Button>
      <Button {...args} variant="secondary">
        {children}
      </Button>
      <Button {...args} variant="danger">
        {children}
      </Button>
      <Button {...args} variant="warning">
        {children}
      </Button>
      <Button {...args} variant="success">
        {children}
      </Button>
    </RowStack>
  ),
};

export const AllSizes: Story = {
  name: 'all sizes',
  render: ({ children, ...args }) => (
    <ColumnStack>
      <Button {...args} size="extra-small">
        {children}
      </Button>
      <Button {...args} size="small">
        {children}
      </Button>
      <Button {...args} size="medium">
        {children}
      </Button>
      <Button {...args} size="large">
        {children}
      </Button>
      <Button {...args} size="extra-large">
        {children}
      </Button>
    </ColumnStack>
  ),
};
