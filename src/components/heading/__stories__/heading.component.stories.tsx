import { Meta, StoryObj } from '@storybook/react';
import { SizeModes } from '../../../type/size-mode.type.ts';
import { Sizes } from '../../../type/size.type.ts';
import { ParagraphText } from '../../paragraph-text';
import { Heading, HeadingLevels } from '../heading.component';

const meta = {
  title: 'Components/Heading',
  component: Heading,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    children: {
      control: 'text',
    },

    size: {
      control: 'select',
      options: [...Sizes],
    },

    sizeMode: {
      control: 'select',
      options: [...SizeModes],
    },

    level: {
      control: 'select',
      options: [...HeadingLevels],
    },
  },

  args: {
    size: 'medium',
    children: 'The overall pleasantness of all things pink',
  },
} satisfies Meta<typeof Heading>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: ({ children, ...args }) => <Heading {...args}>{children}</Heading>,
};

export const WithParentWithOwnFontSize: Story = {
  name: 'with parent with own font-size (36px)',
  render: ({ children, size, sizeMode, ...args }) => (
    <div style={{ fontSize: '36px', outline: '1px dotted red' }}>
      <Heading {...args} size={size} sizeMode={sizeMode}>
        {children}
      </Heading>
      <ParagraphText size={size} sizeMode={sizeMode}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tincidunt
        posuere nunc ut porttitor. Nullam efficitur ultricies ullamcorper. Morbi
        nec dictum massa, non egestas justo. Nulla vel dignissim nibh. Nunc
        porta felis turpis, non tempor est pulvinar at. Etiam laoreet orci at
        nisi lobortis, sit amet porta ligula tristique. Aliquam nisi nunc,
        lacinia eu magna eget, euismod interdum nulla. Cras sodales tellus vel
        urna feugiat, eu mollis nisi hendrerit. Nulla placerat velit ac
        malesuada imperdiet. Mauris tellus felis, tincidunt vitae rhoncus ut,
        aliquet et neque. Nam vitae felis diam. Vivamus tincidunt erat ac urna
        feugiat, et iaculis sem cursus. Aenean interdum molestie metus at
        auctor.
      </ParagraphText>
    </div>
  ),
  args: {
    sizeMode: 'parent-relative',
  },
};

export const WithParagraphs: Story = {
  name: 'With paragraphs',
  render: ({ children, size, sizeMode, ...args }) => (
    <>
      <Heading {...args} size={size} sizeMode={sizeMode}>
        {children}
      </Heading>
      <ParagraphText size={size} sizeMode={sizeMode}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tincidunt
        posuere nunc ut porttitor. Nullam efficitur ultricies ullamcorper. Morbi
        nec dictum massa, non egestas justo. Nulla vel dignissim nibh. Nunc
        porta felis turpis, non tempor est pulvinar at. Etiam laoreet orci at
        nisi lobortis, sit amet porta ligula tristique. Aliquam nisi nunc,
        lacinia eu magna eget, euismod interdum nulla. Cras sodales tellus vel
        urna feugiat, eu mollis nisi hendrerit. Nulla placerat velit ac
        malesuada imperdiet. Mauris tellus felis, tincidunt vitae rhoncus ut,
        aliquet et neque. Nam vitae felis diam. Vivamus tincidunt erat ac urna
        feugiat, et iaculis sem cursus. Aenean interdum molestie metus at
        auctor.
      </ParagraphText>
    </>
  ),
};
