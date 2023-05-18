import { ComponentMeta, ComponentStory } from "@storybook/react"
import { Button, ButtonVariant } from "./Button"

const buttonText = "Submit"

export default {
    title: "shared/Button",
    component: Button,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = args => <Button {...args} />

export const FilledButton = Template.bind({})
FilledButton.args = {
    children: buttonText,
    variant: ButtonVariant.FILLED,
}
export const FilledButtonDisabled = Template.bind({})
FilledButtonDisabled.args = {
    children: buttonText,
    variant: ButtonVariant.FILLED,
    disabled: true,
}

export const OutlineButton = Template.bind({})
OutlineButton.args = {
    children: buttonText,
    variant: ButtonVariant.OUTLINE,
}

export const OutlineButtonDisabled = Template.bind({})
OutlineButtonDisabled.args = {
    variant: ButtonVariant.OUTLINE,
    children: buttonText,
    disabled: true,
}

export const ClearButton = Template.bind({})
ClearButton.args = {
    children: buttonText,
    variant: ButtonVariant.CLEAR,
}

export const ClearButtonDisabled = Template.bind({})
ClearButtonDisabled.args = {
    variant: ButtonVariant.CLEAR,
    children: buttonText,
    disabled: true,
}
