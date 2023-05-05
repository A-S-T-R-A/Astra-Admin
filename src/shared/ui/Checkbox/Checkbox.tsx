import { InputHTMLAttributes, useState, ChangeEvent } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import { v4 as uuid } from "uuid"
import styles from "./Checkbox.module.scss"

type HtmlInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "onChange" | "type">

interface inputProps extends HtmlInputProps {
    label: string
    checked?: boolean
    positionCheckboxRight?: boolean
    onChange?: () => void
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
    const [isChecked, setIsChecked] = useState(false)

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setIsChecked(event.target.checked)
    }

    const id = uuid()
    return (
        <label
            htmlFor={id}
            data-testid="checkboxLabel"
            className={
                positionCheckboxRight ? styles.checkboxWrapper : styles.checkboxWrapperReverse
            }
        >
            <input
                type="checkbox"
                checked={isChecked}
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
