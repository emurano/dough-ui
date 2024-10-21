import { StoryObj } from '@storybook/react';
import { Text } from '../text.component';
declare const meta: {
    title: string;
    component: typeof Text;
    parameters: {
        layout: string;
    };
    argTypes: {
        size: {
            control: "select";
            options: ("small" | "extra-small" | "medium" | "large" | "extra-large")[];
        };
        sizeMode: {
            control: "select";
            options: ("parent-relative" | "globally-relative")[];
        };
        children: {
            control: "text";
        };
    };
    args: {
        size: "medium";
        sizeMode: "parent-relative";
        children: string;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Primary: Story;
export declare const WithinParentWithRelative: Story;
export declare const LargeExample: Story;
export declare const ParentRelativeLargeExample: Story;
export declare const ParentRelativeSmallExample: Story;
export declare const GloballyRelativeLargeExample: Story;
export declare const GloballyRelativeSmallExample: Story;
//# sourceMappingURL=text.component.stories.d.ts.map