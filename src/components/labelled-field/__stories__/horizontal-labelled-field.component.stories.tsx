import { Meta, StoryObj } from '@storybook/react';
import { Input } from '@components/input';
import { ColumnStack } from "@layout-primitives/column-stack";
import { RowStack } from '@layout-primitives/row-stack';
import { LabelledFieldFieldWidths, LabelledFieldLabelWidths } from '../types';
import { HorizontalLabelledField } from '../horizontal-labelled-field.component';

const meta: Meta<typeof HorizontalLabelledField> = {
  title: 'Components/HorizontalLabelledField',
  component: HorizontalLabelledField,
  argTypes: {
    label: {
      control: 'text',
    },

    fieldWidth: {
      control: 'select',
      options: [...LabelledFieldFieldWidths],
    },

    labelWidth: {
      control: 'select',
      options: [...LabelledFieldLabelWidths],
    },
  },
  args: {
    label: 'Expected Delivery Date',
    labelWidth: 'small',
    fieldWidth: 'large',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  name: 'example',
  render: (args) => (
    <HorizontalLabelledField {...args}>
      {(fieldProps) => <Input {...fieldProps} />}
    </HorizontalLabelledField>
  )

}

export const MultipleHorizontally: Story = {
  name: 'multiple (horizontally)',
  render: (args) => (
    <RowStack>
      <HorizontalLabelledField {...args} label="Name">
        {(fieldProps) => <Input {...fieldProps} width="full" />}
      </HorizontalLabelledField>

      <HorizontalLabelledField {...args} label="Occupation">
        {(fieldProps) => <Input {...fieldProps} width="full" />}
      </HorizontalLabelledField>

      <HorizontalLabelledField {...args} label="Message">
        {(fieldProps) => <Input {...fieldProps} width="full" />}
      </HorizontalLabelledField>
    </RowStack>
  ),
};

export const MultipleVertically: Story = {
  name: 'multiple (verically)',
  render: (args) => (
    <ColumnStack>
      <HorizontalLabelledField {...args} label="Name">
        {(fieldProps) => <Input {...fieldProps} width="full"/>}
      </HorizontalLabelledField>

      <HorizontalLabelledField {...args} label="Occupation">
        {(fieldProps) => <Input {...fieldProps} width="full"/>}
      </HorizontalLabelledField>

      <HorizontalLabelledField {...args} label="Message">
        {(fieldProps) => <Input {...fieldProps} width="full" />}
      </HorizontalLabelledField>
    </ColumnStack>
  ),
};

export const LongLabelText: Story = {
  name: 'long label text',
  render: (args) => (
    <ColumnStack>
      <HorizontalLabelledField {...args}>
        {(fieldProps) => <Input {...fieldProps} width="full"/>}
      </HorizontalLabelledField>
    </ColumnStack>
  ),
  args: {
    label: 'Very long label text right here',
    labelWidth: 'small',
  },
};
