import { Text } from '@components/text';
import { Meta, StoryObj } from '@storybook/react';
import { CenteredPageLayout } from '../centered-page-layout.component';

const meta = {
  title: 'PageLayouts / CentredPageLayout',
  component: CenteredPageLayout,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    children: {
      control: 'text',
    },
  },

  args: {
    children: 'This is the content of the page',
  },
} satisfies Meta<typeof CenteredPageLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => (
    <CenteredPageLayout {...args}>
      <Text size="large">{args.children}</Text>
    </CenteredPageLayout>
  ),
};
