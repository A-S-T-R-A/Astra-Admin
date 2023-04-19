import { useDispatch, useSelector } from "react-redux"
import { Input } from "shared/ui/Input/Input"
import { RadioGroup } from "shared/ui/RadioGroup"
import { Checkbox } from "shared/ui/Checkbox/Checkbox"
import { getProductName } from "../../model/selectors/productSelectors"
import styles from "./General.module.scss"
import { productActions } from "../../model/slice/productSlice"

export function General() {
    const dispatch = useDispatch()
    const name = useSelector(getProductName)

    return (
        <div className={styles.container}>
            <Input value={name} onChange={value => dispatch(productActions.setName(value))} />
            <textarea cols="30" rows="10"></textarea>
            <Input />
            <div>DropDown</div>
            {/* <RadioGroup /> */}
            <Checkbox />
            <Checkbox />
        </div>
    )
}
