import { useState } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import { Typography } from "shared/ui/Typography/Typography"
import styles from "./ProductForm.module.scss"
import { SidebarListItem, sidebarList } from "../const/list"
import { General } from "./General/General"
import { Attributes } from "./Attributes/Attributes"
import { Images } from "./Images/Images"
import { Other } from "./Other/Other"

interface ProductFormProps {
    className?: string
}

export function ProductForm({ className }: ProductFormProps) {
    const [selectedItem, setSelectedItem] = useState(SidebarListItem.GENERAL)

    return (
        <div className={classNames(styles.container, {}, [className])}>
            <div className={styles.sidebar}>
                {sidebarList.map(item => (
                    <div
                        key={item}
                        className={classNames(styles.sidebarItem, {
                            [styles.selectedItem]: selectedItem === item,
                        })}
                        onClick={() => setSelectedItem(item)}
                    >
                        <Typography>{item}</Typography>
                    </div>
                ))}
            </div>
            <div className={styles.main}>
                {selectedItem === SidebarListItem.GENERAL && <General />}
                {selectedItem === SidebarListItem.ATTRIBUTES && <Attributes />}
                {selectedItem === SidebarListItem.IMAGES && <Images />}
                {selectedItem === SidebarListItem.OTHER && <Other />}
            </div>
        </div>
    )
}
