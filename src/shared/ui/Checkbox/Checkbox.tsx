import { InputHTMLAttributes, useState, ChangeEvent } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import { v4 as uuid } from "uuid"
import styles from "./Checkbox.module.scss"

type HtmlInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "onChange" | "type">

interface inputProps extends HtmlInputProps {
    label: string
    checked: boolean
    positionCheckboxRight?: boolean
    onChange?: (value: boolean) => void
    className?: string
    error?: string
}

export function Checkbox(props: inputProps) {
    const {
        label,
        checked,
        onChange,
        className,
        positionCheckboxRight = true,
        error,
        ...otherProps
    } = props

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        onChange?.(event.target.checked)
    }

    const id = uuid()
    return (
        <label
            htmlFor={id}
            data-testid="checkboxLabel"
            className={classNames(
                styles.wrapper,
                {
                    [styles.checkboxWrapperReverse]: !positionCheckboxRight,
                },
                []
            )}
        >
            <input
                type="checkbox"
                checked={checked}
                onChange={handleChange}
                data-testid="checkbox"
                id={id}
            />

            <p className={styles.label} data-testid="label">
                {label}
            </p>

            {!!error && (
                <p className={styles.error} data-testid="error">
                    {error}
                </p>
            )}
        </label>
    )
}
