import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { useState } from "react"
import { Textarea, TextareaType } from "./Textarea"

describe("Textarea", () => {
    test("Textarea test", () => {
        render(<Textarea value="" onChange={jest.fn()} />)
        expect(screen.getByTestId("TextareaContainer")).toBeInTheDocument()
        expect(screen.getByTestId("Textarea")).toBeInTheDocument()
        expect(screen.queryByTestId("TextareaLabel")).not.toBeInTheDocument()
        expect(screen.queryByTestId("Textarea")).not.toHaveAttribute("placeholder", "placeholder")
        expect(screen.queryByTestId("TextareaContainer")).not.toHaveClass("incorrect")
    })

    test("Textarea without label, but isRequired", () => {
        render(<Textarea value="" onChange={jest.fn()} isRequired />)
        expect(screen.getByTestId("TextareaContainer")).not.toContainHTML("*")
    })

    test("Textarea with label test", () => {
        render(<Textarea value="" onChange={jest.fn()} id="test" label="Textarea label test" />)
        expect(screen.getByTestId("TextareaLabel")).toBeInTheDocument()
    })

    test("Textarea with label isRequired", () => {
        render(
            <Textarea
                value=""
                onChange={jest.fn()}
                id="test"
                label="Textarea label test"
                isRequired
            />
        )
        expect(screen.getByTestId("Textarea")).toContainHTML("*")
    })

    test("Textarea test with value", () => {
        render(<Textarea value="Textarea value test" onChange={jest.fn()} />)
        expect(screen.getByTestId("Textarea")).toHaveAttribute("value", "Textarea value test")
    })

    test("Textarea type = text", () => {
        render(<Textarea value="" onChange={jest.fn()} />)
        expect(screen.getByTestId("Textarea")).toHaveAttribute("type", TextareaType.TEXT)
    })

    test("Textarea type = number", () => {
        render(<Textarea value="" onChange={jest.fn()} type={TextareaType.NUMBER} />)
        expect(screen.getByTestId("Textarea")).toHaveAttribute("type", TextareaType.NUMBER)
    })

    test("Textarea with placeholder", () => {
        render(<Textarea value="" onChange={jest.fn()} placeholder="placeholder test" />)
        expect(screen.getByPlaceholderText("placeholder test")).toBeInTheDocument()
    })

    test("Textarea with error", () => {
        render(<Textarea value="" onChange={jest.fn()} error="Enter correct text" />)
        expect(screen.getByText("Enter correct text")).toBeInTheDocument()
        expect(screen.getByTestId("TextareaContainer")).toHaveClass("incorrect")
    })

    test("Textarea value changes", () => {
        function TextareaTest() {
            const [value, setValue] = useState("")

            return (
                <Textarea
                    id="test"
                    label="Name"
                    value={value}
                    placeholder="Enter your comment"
                    onChange={value => setValue(value)}
                    error="Enter correct text"
                    isRequired
                />
            )
        }

        render(<TextareaTest />)
        userEvent.type(screen.getByTestId("Textarea"), "Textarea value changes test")
        expect(screen.getByTestId("Textarea")).toHaveAttribute(
            "value",
            "Textarea value changes test"
        )
    })

    screen.debug()
})
