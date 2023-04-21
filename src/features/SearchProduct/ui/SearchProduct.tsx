import { useState } from "react"
import { Input } from "shared/ui/Input/Input"
import { DeleteSeacrhbarIcon, SearchIcon } from "shared/assets/icons/others"
import { classNames } from "shared/lib/classNames/classNames"
import styles from "./SearchProduct.module.scss"

interface SearchProductProps {
    className?: string
    onSearch?: (value: string) => void
    onSearchReset?: () => void
}

export function SearchProduct({ className, onSearch, onSearchReset }: SearchProductProps) {
    const [value, setValue] = useState("")
    const [hover, setHover] = useState(false)
    const [active, setActive] = useState(false)

    function changeHandler(value: string) {
        setValue(value)

        if (value.length < 3) {
            onSearchReset?.()
            return
        }
        onSearch?.(value)
    }

    return (
        <div className={classNames(styles.container, {}, [className])}>
            <SearchIcon
                className={classNames(
                    styles.icon,
                    { [styles.active]: value || hover || active },
                    []
                )}
            />
            {value && <DeleteSeacrhbarIcon className={styles.cross} onClick={() => setValue("")} />}
            <Input
                value={value}
                onChange={value => changeHandler(value)}
                placeholder="Search Product"
                className={styles.searchbar}
                onFocus={() => setActive(true)}
                onBlur={() => setActive(false)}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            />
        </div>
    )
}
