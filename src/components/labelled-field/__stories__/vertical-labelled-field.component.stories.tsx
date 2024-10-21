import { Input } from '@components/input';
import { Meta, StoryObj } from '@storybook/react';
import { ColumnStack } from '@layout-primitives/column-stack';
import { RowStack } from '@layout-primitives/row-stack';
import { LabelledFieldFieldWidths } from "../types";
import { VerticalLabelledField } from '../vertical-labelled-field.component';

const meta: Meta<typeof VerticalLabelledField> = {
  title: 'Components/VerticalLabelledField',
  component: VerticalLabelledField,
  argTypes: {
    label: {
      control: 'text',
    },

    width: {
      control: 'select',
      options: [...LabelledFieldFieldWidths],
    },
  },
  args: {
    label: 'Expected Delivery Date',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  name: 'example',
  render: (args) => (
    <VerticalLabelledField {...args}>
      {(fieldProps) => <Input {...fieldProps} />}
    </VerticalLabelledField>
  ),
};

export const MultipleHorizontal: Story = {
  name: 'multiple (horizontal)',
  render: (args) => (
    <RowStack>
      <VerticalLabelledField {...args} label="Name">
        {(fieldProps) => <Input {...fieldProps} />}
      </VerticalLabelledField>

      <VerticalLabelledField {...args} label="Occupation">
        {(fieldProps) => <Input {...fieldProps} />}
      </VerticalLabelledField>

      <VerticalLabelledField {...args} label="Message">
        {(fieldProps) => <Input {...fieldProps} />}
      </VerticalLabelledField>
    </RowStack>
  ),
};

export const MultipleVertical: Story = {
  name: 'multiple (vertical)',
  render: (args) => (
    <ColumnStack>
      <VerticalLabelledField {...args} label="Name">
        {(fieldProps) => <Input {...fieldProps} />}
      </VerticalLabelledField>

      <VerticalLabelledField {...args} label="Occupation">
        {(fieldProps) => <Input {...fieldProps} />}
      </VerticalLabelledField>

      <VerticalLabelledField {...args} label="Message">
        {(fieldProps) => <Input {...fieldProps} />}
      </VerticalLabelledField>
    </ColumnStack>
  ),
};
