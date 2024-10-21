import { StoryObj } from '@storybook/react';
import { RowStack } from '../row-stack.component';
declare const meta: {
    title: string;
    component: typeof RowStack;
    parameters: {
        layout: string;
    };
    argTypes: {
        gapSize: {
            control: "select";
            options: ("small" | "none" | "extra-small" | "medium" | "large" | "extra-large")[];
        };
        horizontalJustify: {
            control: "select";
            options: ("center" | "start" | "end" | "stretch" | "space-around" | "space-evenly")[];
        };
        verticalAlignment: {
            control: "select";
            options: ("center" | "start" | "end" | "stretch" | "baseline")[];
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
//# sourceMappingURL=row-stack.component.stories.d.ts.map