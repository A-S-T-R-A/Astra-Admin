import { SidebarNavigation } from "entities/CatalogNavigation"
import { Copyright } from "entities/Copyright/Copyright"
import { Logo } from "entities/Logo/Logo"
import { ProductFilters } from "features/ProductFilters"
import { useMatch } from "react-router-dom"
import { AppRoutes } from "shared/config/routeConfig/routeConfig"
import styles from "./Sidebar.module.scss"

export function Sidebar() {
    const categoryPage = useMatch(AppRoutes.CATEGORY)

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <Logo className={styles.logo} />
                {categoryPage ? <ProductFilters /> : <SidebarNavigation />}
                <Copyright className={styles.copyright} />
            </div>
        </div>
    )
}
