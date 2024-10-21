import { StoryObj } from '@storybook/react';
import { ColumnStack } from '../column-stack.component';
declare const meta: {
    title: string;
    component: typeof ColumnStack;
    parameters: {
        layout: string;
    };
    argTypes: {
        gapSize: {
            control: "select";
            options: ("small" | "none" | "extra-small" | "medium" | "large" | "extra-large")[];
        };
        horizontalAlignment: {
            control: "select";
            options: ("center" | "start" | "end" | "stretch" | "baseline")[];
        };
        verticalJustify: {
            control: "select";
            options: ("center" | "start" | "end" | "stretch" | "space-around" | "space-evenly")[];
        };
        blockMode: {
            control: "select";
            options: ("block" | "inline" | "inline-block")[];
        };
    };
    args: {};
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Primary: Story;
//# sourceMappingURL=column-stack.component.stories.d.ts.map