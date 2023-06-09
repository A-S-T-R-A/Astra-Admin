import { classNames } from "shared/lib/classNames/classNames"
import styles from "./Icon.module.scss"

interface IconProps {
    className?: string
    size?: "L" | "M"
    color?: "accent" | "base"
}
export default function ArrowUp(props: IconProps) {
    const { className, size = "L", color = "base" } = props
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={classNames("", {}, [className, styles[size], styles[color]])}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
            />
        </svg>
    )
}
