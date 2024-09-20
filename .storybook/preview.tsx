import type { Preview } from '@storybook/react';
import { FontProvider } from '@src/providers';

const preview: Preview = {
  parameters: {
    layout: 'centered',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  decorators: [
    (Story) => (
      <FontProvider>
        <Story />
      </FontProvider>
    ),
  ],
};

export default preview;
