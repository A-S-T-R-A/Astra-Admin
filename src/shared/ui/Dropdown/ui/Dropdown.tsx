import { classNames } from "shared/lib/classNames/classNames"
import { Typography } from "shared/ui/Typography/Typography"
import { useState } from "react"

import styles from "./Dropdown.module.scss"

export function Dropdown() {
    const [selectedValue, setSelectedValue] = useState("")

    const options = [
        { value: "cars", label: "Cars" },
        { value: "motocycles", label: "Motorcycles" },
        { value: "auto parts", label: "Auto Parts" },
    ]

    const handleChange = (event: any) => {
        setSelectedValue(event.target.value)
    }

    return (
        <div>
            <select className={styles.select} value={selectedValue} onChange={handleChange}>
                <option value="">Select an option</option>
                {options.map(option => (
                    <option key={option.value} value={option.value}>
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
