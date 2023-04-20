import { ReactElement } from "react"
import styles from "./Attributes.module.scss"

interface IAttributesProps {
    AddProductAttribute?: () => ReactElement
    EditProductAttribute?: (arg: { id: number }) => ReactElement
    DeleteProductAttribute?: (arg: { id: number }) => ReactElement
    AttributeModal?: () => ReactElement
}

export function Attributes(props: IAttributesProps) {
    const { AddProductAttribute, EditProductAttribute, DeleteProductAttribute, AttributeModal } =
        props

    const data = [
        { id: 1, name: "Color", value: "red, blue..." },
        { id: 2, name: "Size", value: "big, small..." },
        { id: 3, name: "Length", value: "long, short..." },
        { id: 4, name: "Width", value: "wide,narrow..." },
    ]

    return (
        <>
            {!!AttributeModal && <AttributeModal />}
            <div className={styles.container}>
                {!!AddProductAttribute && (
                    <div>
                        <AddProductAttribute />
                    </div>
                )}
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.slice(0, 4).map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.value}</td>
                                <td className={styles.buttons}>
                                    {!!EditProductAttribute && (
                                        <div>
                                            <EditProductAttribute id={item.id} />
                                        </div>
                                    )}
                                    {!!DeleteProductAttribute && (
                                        <div>
                                            <DeleteProductAttribute id={item.id} />
                                        </div>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}
