import { Meta, StoryObj } from '@storybook/react';
import { SizeModes } from '@type/size-mode.type';
import { Sizes } from '@type/size.type';
import { ColumnStack, RowStack } from '../../../layout-primitives';
import { Button } from '../../button';
import { ParagraphText } from '../../paragraph-text';
import { Input, InputStyles, InputWidths } from '../input.component';

const meta = {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    size: {
      control: 'select',
      options: [...Sizes],
    },

    sizeMode: {
      control: 'select',
      options: [...SizeModes],
    },

    width: {
      control: 'select',
      options: [...InputWidths],
    },

    inputStyle: {
      control: 'select',
      options: [...InputStyles],
    },

    type: {
      control: 'select',
      options: [
        'button',
        'checkbox',
        'color',
        'date',
        'datetime-local',
        'email',
        'file',
        'hidden',
        'image',
        'month',
        'number',
        'password',
        'radio',
        'range',
        'reset',
        'search',
        'submit',
        'tel',
        'text',
        'time',
        'url',
        'week',
      ],
    },
    value: { control: 'text' },
    defaultValue: { control: 'text' },
  },

  args: {
    size: 'medium',
    sizeMode: 'globally-relative',
    inputStyle: 'bordered',
    type: 'text',
    defaultValue: '111 Eagle Street',
    placeholder: 'Start typing ...'
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  name: 'Example',
  render: ({ value, ...args }) => <Input {...args} value={value} />,
};

export const NextToButton: Story = {
  name: 'Next to Buttons',
  render: ({ value, ...args }) => (
    <ColumnStack horizontalAlignment="start" style={{ fontSize: '1rem' }}>
      <RowStack gapSize={args.size}>
        <Input {...args} value={value} />
        <Button size={args.size} sizeMode={args.sizeMode}>
          Save Changes
        </Button>
        <Button size={args.size} sizeMode={args.sizeMode} variant="secondary">
          Reset
        </Button>
        <Button
          size={args.size}
          sizeMode={args.sizeMode}
          variant="danger"
          buttonStyle="link"
        >
          Delete
        </Button>
      </RowStack>
      <ParagraphText size={args.size} sizeMode={args.sizeMode}>
        This demonstrates a small, inline form. See how the fields all align and
        are the same height.
      </ParagraphText>
    </ColumnStack>
  ),
};

export const WithParentWithSetWidth: Story = {
  name: 'with parent with set width (300px)',
  render: ({ value, ...args }) => (
    <div
      style={{ width: '300px', outline: '1px dashed green', padding: '1em' }}
    >
      <Input {...args} value={value} />
    </div>
  ),
};

export const WithParentWithSetFontSize: Story = {
  name: 'with parent with set font-size (40px)',
  render: ({ value, ...args }) => (
    <div style={{ fontSize: '40px' }}>
      <Input {...args} value={value} />
    </div>
  ),
  args: {
    sizeMode: 'parent-relative',
  }
};
