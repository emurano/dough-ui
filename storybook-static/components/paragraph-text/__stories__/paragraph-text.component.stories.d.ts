import { StoryObj } from '@storybook/react';
import { ParagraphText } from '../paragraph-text.component';
declare const meta: {
    title: string;
    component: typeof ParagraphText;
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
        children: string;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Primary: Story;
//# sourceMappingURL=paragraph-text.component.stories.d.ts.map