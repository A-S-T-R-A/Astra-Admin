import { classNames, Mods } from "shared/lib/classNames/classNames"
import { ButtonHTMLAttributes, memo, ReactNode } from "react"
import styles from "./Button.module.scss"

export enum ButtonVariant {
    OUTLINE = "outline",
    FILLED = "filled-red",
    CLEAR = "clearInverted",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    variant?: ButtonVariant
    disabled?: boolean
    children?: ReactNode
}

export const Button = memo((props: ButtonProps) => {
    const { className, variant = ButtonVariant.OUTLINE, disabled, children, ...restProps } = props

    const mods: Mods = {
        [styles.disabled]: disabled,
    }

    return (
        <button
            data-testid="button"
            type="button"
            className={classNames(styles.button, mods, [className, styles[variant]])}
            disabled={disabled}
            {...restProps}
        >
            {children}
        </button>
    )
})
