import styles from "./ProductsTable.module.scss"

export function ProductsTable() {
    const headers = ["ID", "Image", "Name", "Stock", "Price", "Categories", "Tags"]
    const cells = [
        {
            id: 1,
            image: 1,
            name: "Name",
            stock: "in stock",
            price: 222,
            categories: "-",
            tags: "-",
        },
        {
            id: 2,
            image: 1,
            name: "Name",
            stock: "in stock",
            price: 222,
            categories: "-",
            tags: "-",
        },
        {
            id: 3,
            image: 1,
            name: "Name",
            stock: "in stock",
            price: 222,
            categories: "-",
            tags: "-",
        },
    ]

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
                {cells.map(item => {
                    const { id, image, name, stock, price, categories, tags } = item
                    return (
                        <tr key={id}>
                            <td>{id}</td>
                            <td>{image}</td>
                            <td>{name}</td>
                            <td>{stock}</td>
                            <td>{price}</td>
                            <td>{categories}</td>
                            <td>{tags}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}
