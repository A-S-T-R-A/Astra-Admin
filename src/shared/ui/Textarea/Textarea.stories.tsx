import { ComponentMeta, ComponentStory } from "@storybook/react"
import { DarkBgDecorator } from "shared/config/storybook/DarkBgDecorator/DarkBgDecorator"
import { Button, ButtonVariant } from "./Textarea"

const buttonText = "Submit"

export default {
    title: "shared/Button",
    component: Button,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = args => <Button {...args} />

export const OutlineButton = Template.bind({})
OutlineButton.args = {
    children: buttonText,
}

export const OutlineButtonDisabled = Template.bind({})
OutlineButtonDisabled.args = {
    children: buttonText,
    disabled: true,
}

export const FilledRedButton = Template.bind({})
FilledRedButton.args = {
    children: buttonText,
    variant: ButtonVariant.FILLED,
}

export const FilledRedButtonDisabled = Template.bind({})
FilledRedButtonDisabled.args = {
    children: buttonText,
    variant: ButtonVariant.FILLED,
    disabled: true,
}

export const InvertedButton = Template.bind({})
InvertedButton.args = {
    children: buttonText,
    variant: ButtonVariant.CLEAR,
}
InvertedButton.decorators = [DarkBgDecorator()]

export const InvertedButtonDisabled = Template.bind({})
InvertedButtonDisabled.args = {
    children: buttonText,
    variant: ButtonVariant.CLEAR,
    disabled: true,
}
InvertedButtonDisabled.decorators = [DarkBgDecorator()]
