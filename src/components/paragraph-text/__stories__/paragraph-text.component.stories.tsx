// noinspection JSUnusedGlobalSymbols
import { Meta, StoryObj } from '@storybook/react';
import { SizeModes } from "../../../type/size-mode.type";
import { Sizes } from '../../../type/size.type';
import { ParagraphText } from '../paragraph-text.component';

const meta = {
  title: 'Components/ParagraphText',
  component: ParagraphText,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    size: {
      control: 'select',
      options: [...Sizes],
    },

    sizeMode: {
      control: 'select',
      options: [...SizeModes],
    },

    children: {
      control: 'text',
    },
  },

  args: {
    size: 'medium',
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tincidunt posuere nunc ut porttitor. Nullam efficitur ultricies ullamcorper. Morbi nec dictum massa, non egestas justo. Nulla vel dignissim nibh. Nunc porta felis turpis, non tempor est pulvinar at. Etiam laoreet orci at nisi lobortis, sit amet porta ligula tristique. Aliquam nisi nunc, lacinia eu magna eget, euismod interdum nulla. Cras sodales tellus vel urna feugiat, eu mollis nisi hendrerit. Nulla placerat velit ac malesuada imperdiet. Mauris tellus felis, tincidunt vitae rhoncus ut, aliquet et neque. Nam vitae felis diam. Vivamus tincidunt erat ac urna feugiat, et iaculis sem cursus. Aenean interdum molestie metus at auctor.',
  },
} satisfies Meta<typeof ParagraphText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => (
    <div>
      <ParagraphText {...args}>{args.children}</ParagraphText>
      <ParagraphText {...args}>{args.children}</ParagraphText>
      <ParagraphText {...args}>{args.children}</ParagraphText>
    </div>
  ),
};
