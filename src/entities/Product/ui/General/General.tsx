import { ReactElement } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Input, InputType } from "shared/ui/Input/Input"
import { RadioGroup } from "shared/ui/RadioGroup"
import { Checkbox } from "shared/ui/Checkbox/Checkbox"
import {
    getProductCategory,
    getProductDescription,
    getProductIsNew,
    getProductIsTop,
    getProductName,
    getProductPrice,
    getProductStockStatus,
} from "../../model/selectors/productSelectors"
import styles from "./General.module.scss"
import { productActions } from "../../model/slice/productSlice"
import { categoryDropdownList, stockStatusOptions } from "../../const/list"
import { StockStatusOptionVariant } from "../../model/types/types"

interface IGeneralProps {
    SelectCategory?: (props: { onChange: (value: string) => void }) => ReactElement
}

export function General({ SelectCategory }: IGeneralProps) {
    const dispatch = useDispatch()

    const name = useSelector(getProductName)
    const description = useSelector(getProductDescription)
    const price = useSelector(getProductPrice)
    const category = useSelector(getProductCategory)
    const stockStatus = useSelector(getProductStockStatus)
    const isNew = useSelector(getProductIsNew)
    const isTop = useSelector(getProductIsTop)

    return (
        <div className={styles.container}>
            <Input value={name} onChange={value => dispatch(productActions.setName(value))} />
            <textarea
                value={description}
                onChange={e => dispatch(productActions.setDescription(e.target.value))}
            />
            <Input
                value={price}
                onChange={value => dispatch(productActions.setPrice(+value))}
                type={InputType.NUMBER}
            />
            {!!SelectCategory && (
                <SelectCategory onChange={value => dispatch(productActions.setCategory(value))} />
            )}
            <RadioGroup
                title="Stock status"
                options={stockStatusOptions}
                activeInput={stockStatus}
                onChange={value => {
                    dispatch(productActions.setStockStatus(value as StockStatusOptionVariant))
                }}
            />
            <Checkbox
                id="1"
                label="New Product"
                checked={isNew}
                onChange={() => dispatch(productActions.toggleIsNew())}
            />
            <Checkbox
                id="2"
                label="Top Product"
                checked={isTop}
                onChange={() => dispatch(productActions.toggleIsTop())}
            />
        </div>
    )
}
