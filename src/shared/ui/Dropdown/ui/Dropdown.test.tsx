import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { useState } from "react"
import { Dropdown } from "./Dropdown"

const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
]

describe("Dropdown", () => {
    test("Dropdown test", () => {
        render(<Dropdown options={options} onChange={jest.fn()} />)
        expect(screen.getByTestId("InputContainer")).toBeInTheDocument()
        expect(screen.getByTestId("Input")).toBeInTheDocument()
        expect(screen.queryByTestId("InputLabel")).not.toBeInTheDocument()
        expect(screen.queryByTestId("Input")).not.toHaveAttribute("placeholder", "placeholder")
        expect(screen.queryByTestId("InputContainer")).not.toHaveClass("incorrect")
    })

    test("Input value changes", () => {
        function InputTest() {
            const [value, setValue] = useState("")

            return (
                <Dropdown
                    id="test"
                    label="Name"
                    value={value}
                    placeholder="Enter text"
                    onChange={value => setValue(value)}
                    error="Enter correct text"
                    isRequired
                />
            )
        }

        render(<InputTest />)
        userEvent.type(screen.getByTestId("Input"), "Input value changes test")
        expect(screen.getByTestId("Input")).toHaveAttribute("value", "Input value changes test")
    })

    screen.debug()
})
