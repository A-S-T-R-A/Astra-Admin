import { Button } from "shared/ui/Button/Button"
import { useDispatch } from "react-redux"
import styles from "./AddProductAttribute.module.scss"
import { manageProductAttributesActions } from "../../model/slice/manageProductAttributeSlice"

export function AddProductAttribute() {
    const dispatch = useDispatch()

    function clickHandler() {
        dispatch(manageProductAttributesActions.initModal())
        dispatch(manageProductAttributesActions.setIsOpen(true))
    }

    return (
        <Button className={styles.btn} onClick={clickHandler}>
            Add
        </Button>
    )
}
