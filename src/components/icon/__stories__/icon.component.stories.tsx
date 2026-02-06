import { Text } from '@components/text';
import { ColumnStack } from '@layout-primitives/column-stack';
import { RowStack } from '@layout-primitives/row-stack';
import { Meta, StoryObj } from '@storybook/react';
import { IconAnimations } from '../icon-core.component';
import { DoughUiIconName, IconNames } from '../icon-glyph-map';
import { Icon } from '../icon.component';
import { DoughUiIconSizes } from '../types';

const meta = {
  title: 'Components/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    icon: {
      control: 'select',
      options: IconNames,
    },
    size: {
      control: 'select',
      options: DoughUiIconSizes,
    },

    animation: {
      control: 'select',
      options: ['', ...IconAnimations],
    },
  },
  args: {
    icon: 'save',
    size: 'standard',
  },
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  name: 'example',
  render: (args) => <Icon {...args} />,
};

export const AllIcons: Story = {
  name: 'all icons',
  render: (args) => (
    <RowStack horizontalJustify="start" wrapMode="wrap">
      {IconNames.map((iconName) => (
        <ColumnStack key={iconName}>
          <Icon {...args} icon={iconName as DoughUiIconName} />
          <Text>{iconName}</Text>
        </ColumnStack>
      ))}
    </RowStack>
  ),
};
