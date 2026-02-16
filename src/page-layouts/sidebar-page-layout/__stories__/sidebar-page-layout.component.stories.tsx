import { Text } from '@components/text';
import { Meta, StoryObj } from '@storybook/react-vite';
import { SidebarPageLayout } from '../sidebar-page-layout.component';

const meta = {
  title: 'PageLayouts / SidebarPageLayout',
  component: SidebarPageLayout,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    noPadding: { control: 'boolean' },
    children: {
      control: 'text',
    },
  },

  args: {
    children: 'This is the content of the page',
  },
} satisfies Meta<typeof SidebarPageLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => (
    <SidebarPageLayout {...args}>
      <Text>{args.children}</Text>
    </SidebarPageLayout>
  ),
};
