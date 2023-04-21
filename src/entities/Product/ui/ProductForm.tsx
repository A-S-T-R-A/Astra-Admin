import { ReactElement, ReactNode, useState } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import { Typography } from "shared/ui/Typography/Typography"
import styles from "./ProductForm.module.scss"
import { sidebarList } from "../const/list"
import { General } from "./General/General"
import { Attributes } from "./Attributes/Attributes"
import { Images } from "./Images/Images"
import { Other } from "./Other/Other"
import { SidebarListItem } from "../model/types/types"

interface ProductFormProps {
    className?: string
    AddProductAttribute?: () => ReactElement
    EditProductAttribute?: (arg: { id: number }) => ReactElement
    DeleteProductAttribute?: (arg: { id: number }) => ReactElement
    AttributeModal?: () => ReactElement
    AddProductImage?: () => ReactElement
    SelectCategory?: (props: { onChange: (value: string) => void }) => ReactElement
}

export function ProductForm(props: ProductFormProps) {
    const {
        className,
        AddProductAttribute,
        EditProductAttribute,
        DeleteProductAttribute,
        AttributeModal,
        AddProductImage,
        SelectCategory,
    } = props

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
                {selectedItem === SidebarListItem.GENERAL && (
                    <General SelectCategory={SelectCategory} />
                )}
                {selectedItem === SidebarListItem.ATTRIBUTES && (
                    <Attributes
                        AddProductAttribute={AddProductAttribute}
                        EditProductAttribute={EditProductAttribute}
                        DeleteProductAttribute={DeleteProductAttribute}
                        AttributeModal={AttributeModal}
                    />
                )}
                {selectedItem === SidebarListItem.IMAGES && (
                    <Images AddProductImage={AddProductImage} />
                )}
                {selectedItem === SidebarListItem.OTHER && <Other />}
            </div>
        </div>
    )
}
