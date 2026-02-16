import { Text } from '@components/text';
import { Meta, StoryObj } from '@storybook/react-vite';
import { StandardPageLayout } from '../standard-page-layout.component';

const meta = {
  title: 'PageLayouts / StandardPageLayout',
  component: StandardPageLayout,
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
} satisfies Meta<typeof StandardPageLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => (
    <StandardPageLayout {...args}>
      <Text>{args.children}</Text>
    </StandardPageLayout>
  ),
};
