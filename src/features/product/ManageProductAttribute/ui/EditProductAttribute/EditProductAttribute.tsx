import { ReactElement } from "react"
import { useDispatch } from "react-redux"
import { Button } from "shared/ui/Button/Button"
import { manageProductAttributesActions } from "../../model/slice/manageProductAttributeSlice"

interface IEditProductAttributeProps {
    id: number
}

export function EditProductAttribute({ id }: IEditProductAttributeProps): ReactElement {
    const dispatch = useDispatch()

    function clickHandler(id: number) {
        dispatch(manageProductAttributesActions.initModal())
        dispatch(manageProductAttributesActions.setIsOpen(true))
    }

    return <Button onClick={() => clickHandler(id)}>Edit</Button>
}
