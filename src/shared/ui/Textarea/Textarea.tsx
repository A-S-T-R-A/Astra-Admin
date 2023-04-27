import { classNames } from "shared/lib/classNames/classNames"
import { ChangeEvent, TextareaHTMLAttributes } from "react"
import styles from "./Textarea.module.scss"

// type HtmlInputProps = Omit<TextareaHTMLAttributes<HTMLInputElement>, "value" | "onChange">

type HtmlTextareaProps = Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "value" | "onChange">

export enum TextareaType {
    TEXT = "text",
    NUMBER = "number",
    // EMAIL = "email",
    // PASSWORD = "password",
}

export interface TextareaProps extends HtmlTextareaProps {
    type?: TextareaType
    label?: string
    isRequired?: boolean
    className?: string
    error?: string
    value?: string | number
    id?: string
    rows?: number | undefined
    cols?: number | undefined
    onChange?: (value: string) => void
}

export function Textarea(props: TextareaProps) {
    const {
        type = "text",
        label,
        isRequired = false,
        className,
        onChange,
        id,
        error,
        rows,
        cols,
        ...otherProps
    } = props

    const containerClassName = classNames(styles.container, { [styles.incorrect]: error }, [
        className,
    ])

    function changeHandler(e: any) {
        onChange?.(e.target.value)
    }

    return (
        <div className={containerClassName} data-testid="TextareaContainer">
            {!!label && (
                <label htmlFor={id} className={styles.label} data-testid="TextareaLabel">
                    {label}
                    {isRequired && <span className={styles.required}>*</span>}
                </label>
            )}
            <textarea
                id={id}
                onChange={changeHandler}
                className={styles.textarea}
                data-testid="Textarea"
                rows={rows}
                cols={cols}
                {...otherProps}
            />
            {!!error && <p className={styles.error}>{error}</p>}
        </div>
    )
}
