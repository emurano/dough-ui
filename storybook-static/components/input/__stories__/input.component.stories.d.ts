import { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: import('../../../../node_modules/react').ForwardRefExoticComponent<import('../input.component').DoughUiInputProps & import('../../../../node_modules/react').RefAttributes<HTMLInputElement>>;
    argTypes: {
        size: {
            control: "select";
            options: ("small" | "extra-small" | "medium" | "large" | "extra-large")[];
        };
        sizeMode: {
            control: "select";
            options: ("parent-relative" | "globally-relative")[];
        };
        width: {
            control: "select";
            options: ("small" | "extra-small" | "medium" | "large" | "extra-large" | "full")[];
        };
        inputStyle: {
            control: "select";
            options: ("bordered" | "borderless")[];
        };
        type: {
            control: "select";
            options: string[];
        };
        value: {
            control: "text";
        };
        defaultValue: {
            control: "text";
        };
    };
    args: {
        size: "medium";
        sizeMode: "globally-relative";
        inputStyle: "bordered";
        type: "text";
        defaultValue: string;
        placeholder: string;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Example: Story;
export declare const NextToButton: Story;
export declare const WithParentWithSetWidth: Story;
export declare const WithParentWithSetFontSize: Story;
//# sourceMappingURL=input.component.stories.d.ts.map