import { useCallback, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { RoutePath } from "shared/config/routeConfig/const"
import { Button } from "shared/ui/Button/Button"
import { Typography, TypographyVariant } from "shared/ui/Typography/Typography"
import { SearchProduct } from "features/SearchProduct"
import { useDispatch, useSelector } from "react-redux"
import { ProductsTable } from "widgets/ProductsTable"
import { useDebounce } from "shared/lib/hooks/useDebounce/useDebounce"
import { SelectCategory } from "features/SelectCategory"
import { Input } from "shared/ui/Input/Input"
import styles from "./ProductsPage.module.scss"
import { getCategoryId, getProducts } from "../model/selectors/productsPageSelectors"
import { productsPageActions } from "../model/slice/productsPageSlice"
import { fetchProducts } from "../model/services/fetchProducts"
import { fetchSearchProducts } from "../model/services/fetchSearchProducts"

export function ProductsPage() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const categoryId = useSelector(getCategoryId)
    const products = useSelector(getProducts)

    const debouncedSearchProducts = useDebounce(value => dispatch(fetchSearchProducts(value)), 500)

    const handleFetchProducts = useCallback(() => dispatch(fetchProducts()), [dispatch])

    useEffect(() => {
        handleFetchProducts()
    }, [handleFetchProducts])

    return (
        <div className={styles.container}>
            <Typography variant={TypographyVariant.H2}>Products</Typography>
            <Button onClick={() => navigate(RoutePath.products_new)}>Add New</Button>
            <SearchProduct onSearch={debouncedSearchProducts} onSearchReset={handleFetchProducts} />
            <SelectCategory
                onChange={(value: string) => {
                    dispatch(productsPageActions.setCategoryId(value))
                    handleFetchProducts()
                }}
            />

            <ProductsTable data={products} />
        </div>
    )
}
