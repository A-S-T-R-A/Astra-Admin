import { IProduct } from "entities/Product"
import { AppLink } from "shared/ui/AppLink/AppLink"
import { RoutePath } from "shared/config/routeConfig/const"
import { DeleteProduct } from "features/product/ManageProduct"
import styles from "./ProductsTable.module.scss"

interface IProductsTableProps {
    data: IProduct[]
}

export function ProductsTable({ data }: IProductsTableProps) {
    const headers = ["ID", "Image", "Name", "Stock", "Price", "Categories", "Tags"]

    const cellsData = data.map(item => {
        const { id, name, price, images } = item
        return {
            id,
            name,
            price,
            image: images?.[0] || null,
            stock: "",
            categories: "-",
            tags: "-",
        }
    })

    return (
        <table className={styles.container}>
            <thead>
                <tr>
                    {headers.map(item => (
                        <td>{item}</td>
                    ))}
                </tr>
            </thead>
            <tbody>
                {cellsData.map(item => {
                    const { id, image, name, stock, price, categories, tags } = item
                    return (
                        <tr key={id}>
                            <td>{id}</td>
                            <td>{!!image && <img src={image} alt="" className={styles.img} />}</td>
                            <td>{name}</td>
                            <td>{stock}</td>
                            <td>{price}</td>
                            <td>{categories}</td>
                            <td>{tags}</td>
                            <td className={styles.buttonsCell}>
                                <AppLink to={`${RoutePath.products_edit}/${id}`}>Edit</AppLink>
                                <DeleteProduct id={id} />
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}
