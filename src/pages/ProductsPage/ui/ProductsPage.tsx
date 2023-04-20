import { useNavigate } from "react-router-dom"
import { RoutePath } from "shared/config/routeConfig/const"
import { Button } from "shared/ui/Button/Button"
import { Typography, TypographyVariant } from "shared/ui/Typography/Typography"
import { SearchProduct } from "features/SearchProduct"
import { ProductsTable } from "widgets/ProductsTable"
import styles from "./ProductsPage.module.scss"

export function ProductsPage() {
    const navigate = useNavigate()

    return (
        <div className={styles.container}>
            <Typography variant={TypographyVariant.H2}>Products</Typography>
            <Button onClick={() => navigate(RoutePath.products_new)}>Add New</Button>
            <SearchProduct />
            <ProductsTable />
        </div>
    )
}
