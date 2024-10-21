import { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: import('../../../../node_modules/react').ForwardRefExoticComponent<import('..').DoughUiButtonProps & import('../../../../node_modules/react').RefAttributes<HTMLButtonElement>>;
    argTypes: {
        children: {
            control: "text";
        };
        variant: {
            control: "select";
            options: readonly ["primary", "secondary", "warning", "success", "danger"];
        };
        size: {
            control: "select";
            options: ("small" | "extra-small" | "medium" | "large" | "extra-large")[];
        };
        sizeMode: {
            control: "select";
            options: ("parent-relative" | "globally-relative")[];
        };
        buttonStyle: {
            control: "select";
            options: ("link" | "button")[];
        };
        onPress: {
            action: string;
        };
    };
    args: {
        children: string;
        variant: "primary";
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Example: Story;
export declare const Multiple: Story;
export declare const AllSizes: Story;
//# sourceMappingURL=button.component.stories.d.ts.map