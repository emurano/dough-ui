import { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: import('../../../../node_modules/react').ForwardRefExoticComponent<import('../heading.component').HeadingProps & import('../../../../node_modules/react').RefAttributes<HTMLHeadingElement>>;
    parameters: {
        layout: string;
    };
    argTypes: {
        children: {
            control: "text";
        };
        size: {
            control: "select";
            options: ("small" | "extra-small" | "medium" | "large" | "extra-large")[];
        };
        sizeMode: {
            control: "select";
            options: ("parent-relative" | "globally-relative")[];
        };
        level: {
            control: "select";
            options: ("h1" | "h2" | "h3" | "h4" | "h5" | "h6")[];
        };
    };
    args: {
        size: "medium";
        children: string;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Primary: Story;
export declare const WithParentWithOwnFontSize: Story;
export declare const WithParagraphs: Story;
//# sourceMappingURL=heading.component.stories.d.ts.map