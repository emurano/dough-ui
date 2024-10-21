import { StoryObj } from '@storybook/react';
import { CenteredPageLayout } from '../centered-page-layout.component';
declare const meta: {
    title: string;
    component: typeof CenteredPageLayout;
    parameters: {
        layout: string;
    };
    argTypes: {
        children: {
            control: "text";
        };
    };
    args: {
        children: string;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Primary: Story;
//# sourceMappingURL=centred-page-layout.component.stories.d.ts.map