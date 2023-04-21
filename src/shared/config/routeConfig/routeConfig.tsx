import { NotFoundPage } from "pages/NotFoundPage"
import { RouteProps } from "react-router-dom"
import { DashboardPage } from "pages/DashboardPage"
import { ProductsPage } from "pages/ProductsPage"
import { ProductsNewPage } from "pages/ProductsNewPage"
import { ProductsEditPage } from "pages/ProductsEditPage"
import { CategoriesPage } from "pages/CategoriesPage"
import { CategoriesNewPage } from "pages/CategoriesNewPage"
import { CategoriesEditPage } from "pages/CategoriesEditPage"
import { AppRoutes, RoutePath } from "./const"
import {DemoPage} from "pages/DemoPage";

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean
}

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.DASHBOARD]: {
        path: RoutePath.dashboard,
        element: <DashboardPage />,
    },
    [AppRoutes.DEMO]: {
        path: RoutePath.demo,
        element: <DemoPage />,
    },
    [AppRoutes.PRODUCTS]: {
        path: RoutePath.products,
        element: <ProductsPage />,
    },
    [AppRoutes.PRODUCTS_NEW]: {
        path: RoutePath.products_new,
        element: <ProductsNewPage />,
    },
    [AppRoutes.PRODUCTS_EDIT]: {
        path: `${RoutePath.products_edit}/:id`,
        element: <ProductsEditPage />,
    },
    [AppRoutes.CATEGORIES]: {
        path: RoutePath.categories,
        element: <CategoriesPage />,
    },
    [AppRoutes.CATEGORIES_NEW]: {
        path: RoutePath.categories_new,
        element: <CategoriesNewPage />,
    },
    [AppRoutes.CATEGORIES_EDIT]: {
        path: `${RoutePath.categories_edit}/:id`,
        element: <CategoriesEditPage />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
}
