import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import { Input } from "shared/ui/Input/Input"
import { Modal } from "shared/ui/Modal/Modal"
import { v4 as uuid } from "uuid"
import styles from "./AttributesModal.module.scss"
import {
    getAttributeModalOpen,
    getAttributeName,
    getAttributeValues,
} from "../../model/selectors/manageProductAttributeSelectors"
import { manageProductAttributesActions } from "../../model/slice/manageProductAttributeSlice"

export function AttributeModal() {
    const [additionalValue, setAdditionalValue] = useState("")

    const dispatch = useDispatch()

    const name = useSelector(getAttributeName)
    const values = useSelector(getAttributeValues)
    const isOpen = useSelector(getAttributeModalOpen)

    function nameChangeHandler(value: string) {
        dispatch(manageProductAttributesActions.setName(value))
    }

    function valueChangeHandler(id: number | string, value: string) {
        const newData = [
            ...values.map(item => {
                if (item.id === id) {
                    return { id, value }
                }
                return item
            }),
        ]
        dispatch(manageProductAttributesActions.setValues(newData))
    }

    function valueAddHandler() {
        const newData = [...values, { id: uuid(), value: additionalValue }]
        dispatch(manageProductAttributesActions.setValues(newData))
        setAdditionalValue("")
    }

    function valueDeleteHandler(id: string | number) {
        const newData = [...values.filter(item => item.id !== id)]
        dispatch(manageProductAttributesActions.setValues(newData))
    }

    function closeModalHandler() {
        dispatch(manageProductAttributesActions.setIsOpen(false))
    }

    return (
        <Modal isOpen={isOpen} onClose={closeModalHandler} contentClassName={styles.container}>
            <button onClick={closeModalHandler}>X</button>
            <div className={styles.attributesContainer}>
                <Input value={name} onChange={value => nameChangeHandler(value)} />
                <div className={styles.attributeValues}>
                    {values.map(item => {
                        const { id, value } = item
                        return (
                            <div className={styles.value} key={id}>
                                <Input
                                    value={value}
                                    onChange={val => valueChangeHandler(id, val)}
                                />

                                <button onClick={() => valueDeleteHandler(id)}>-</button>
                            </div>
                        )
                    })}
                    <div className={styles.value}>
                        <Input
                            value={additionalValue}
                            onChange={value => setAdditionalValue(value)}
                        />
                        <button onClick={valueAddHandler}>+</button>
                    </div>
                </div>
            </div>
            <button>Save</button>
        </Modal>
    )
}
