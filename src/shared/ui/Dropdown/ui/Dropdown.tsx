import { classNames } from "shared/lib/classNames/classNames"
import { Typography } from "shared/ui/Typography/Typography"
import { useState, InputHTMLAttributes, useMemo, ChangeEvent } from "react"

import styles from "./Dropdown.module.scss"

type HTMLDropdownProps = Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange">

export interface Options {
    value: string
    label: string
}

export interface DropdownProps extends HTMLDropdownProps {
    label?: string
    className?: string
    error?: string
    value?: string
    id?: string
    onChange?: (value: string) => void
    options: Options[]
}

export function Dropdown(props: DropdownProps) {
    const [selectedValue, setSelectedValue] = useState("")
    const { className, error, value, id, onChange, options, ...otherProps } = props
    const newOptions = useMemo(() => options.map((i, ind) => ({ ...i, id: ind })), [options])

    const handleChange = (event: ChangeEvent) => {
        const target = event.target as HTMLSelectElement
        setSelectedValue(target.value)
    }

    return (
        <div>
            <select
                data-testid="dropdown-label"
                className={styles.select}
                value={selectedValue}
                onChange={handleChange}
            >
                <option data-testid="dropdown-option-base" value="">
                    Select an option
                </option>
                {newOptions.map(option => (
                    <option
                        data-testid={`dropdown-option ${option.id}`}
                        key={option.value}
                        value={option.value}
                    >
                        {option.label}
                    </option>
                ))}
            </select>
            <p>
                Selected option:
                <span>{selectedValue.toUpperCase()}</span>
            </p>
        </div>
    )
}
