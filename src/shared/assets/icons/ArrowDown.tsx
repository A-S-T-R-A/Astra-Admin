import { classNames } from "shared/lib/classNames/classNames"
import styles from "./Icon.module.scss"

interface IconProps {
    className?: string
    size?: "L" | "M"
    color?: "accent" | "base"
}
export default function ArrowDown(props: IconProps) {
    const { className, size = "L", color = "base" } = props
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="currentColor"
            className={classNames("", {}, [className, styles[size], styles[color]])}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
            />
        </svg>
    )
}
