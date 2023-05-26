import { classNames } from "shared/lib/classNames/classNames"
import styles from "./Icon.module.scss"

interface IconProps {
    className?: string
    size?: "L" | "M"
    color?: "accent" | "base"
}
export default function HomeIcon(props: IconProps) {
    const { className, size = "L", color = "primary" } = props
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
                // eslint-disable-next-line max-len
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
        </svg>
    )
}
