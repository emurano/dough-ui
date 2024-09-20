import { Meta, StoryObj } from '@storybook/react';
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
    inputStyle: 'bordered',
    type: 'text',
    defaultValue: '111 Eagle Street',
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  name: 'Example',
  render: ({ value, ...args }) => <Input {...args} value={value} />,
};

export const NextToButton: Story = {
  name: 'Next to Button',
  render: ({ value, ...args }) => (
    <ColumnStack horizontalAlignment="start">
      <RowStack gapSize="small">
        <Input {...args} value={value} />
        <Button size={args.size}>Save Changes</Button>
        <Button size={args.size} variant="secondary">
          Reset
        </Button>
        <Button size={args.size} variant="danger" buttonStyle="link">
          Delete
        </Button>
      </RowStack>
      <ParagraphText size={args.size}>
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
