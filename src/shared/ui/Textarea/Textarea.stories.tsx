import { ComponentMeta, ComponentStory } from "@storybook/react"
import { Textarea, TextareaType } from "./Textarea"

export default {
    title: "shared/Textarea",
    component: Textarea,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof Textarea>

const Template: ComponentStory<typeof Textarea> = (args: any) => <Textarea {...args} />

export const EmptyText = Template.bind({})
EmptyText.args = {
    value: "",
    placeholder: "Enter something",
}

export const EmptyTextWithLabel = Template.bind({})
EmptyTextWithLabel.args = {
    label: "Name, Surname",
    value: "",
    placeholder: "Enter something",
}

export const TextWithLabelIncorrect = Template.bind({})
TextWithLabelIncorrect.args = {
    error: "Please Enter Correct Value",
    label: "Name, Surname",
    value: "123",
    placeholder: "Enter something",
}

export const EmptyTextWithLabelRequired = Template.bind({})
EmptyTextWithLabelRequired.args = {
    label: "Name, Surname",
    isRequired: true,
    value: "",
    placeholder: "Enter something",
}

export const TextWithLabelRequired = Template.bind({})
TextWithLabelRequired.args = {
    label: "Name, Surname",
    isRequired: true,
    value: "Vadim",
    placeholder: "Enter something",
}

export const NumberWithLabelRequired = Template.bind({})
NumberWithLabelRequired.args = {
    type: TextareaType.NUMBER,
    label: "Name, Surname",
    isRequired: true,
    value: "123456",
    placeholder: "Enter something",
}
