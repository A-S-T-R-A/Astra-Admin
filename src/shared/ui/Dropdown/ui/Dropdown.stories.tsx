import { ComponentMeta, ComponentStory } from "@storybook/react"
import { DarkBgDecorator } from "shared/config/storybook/DarkBgDecorator/DarkBgDecorator"
import { Meta, Story } from "@storybook/react/types-6-0"
import { Dropdown, Options } from "./Dropdown"

export default {
    title: "shared/Dropdown",
    component: Dropdown,
    argTypes: {
        options: { value: "", lebel: "" },
    },
} as ComponentMeta<typeof Dropdown>

const Template: ComponentStory<typeof Dropdown> = (args: any) => <Dropdown {...args} />

export const Default = Template.bind({})
Default.args = {
    options: ["Option 1", "Option 2", "Option 3"],
    selectedOption: "Option 1",
}

export const Disabled = Template.bind({})
Disabled.args = {
    options: ["Option 1", "Option 2", "Option 3"],
    selectedOption: "Option 1",
    disabled: true,
}
