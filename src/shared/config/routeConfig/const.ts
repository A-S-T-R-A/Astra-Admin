export enum AppRoutes {
    DASHBOARD = "dashboard",
    DEMO = "demo",
    PRODUCTS = "products",
    PRODUCTS_NEW = "products_new",
    PRODUCTS_EDIT = "products_edit",
    CATEGORIES = "categories",
    CATEGORIES_NEW = "categories_new",
    CATEGORIES_EDIT = "categories_edit",
    NOT_FOUND = "not_found",
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.DASHBOARD]: "/",
    [AppRoutes.DEMO]: "/demo",
    [AppRoutes.PRODUCTS]: "/products",
    [AppRoutes.PRODUCTS_NEW]: "/products/new",
    [AppRoutes.PRODUCTS_EDIT]: "/products/edit", // + /:id
    [AppRoutes.CATEGORIES]: "/categories",
    [AppRoutes.CATEGORIES_NEW]: "/categories/new",
    [AppRoutes.CATEGORIES_EDIT]: "/categories/edit", // + /:id
    [AppRoutes.NOT_FOUND]: "not_found",
    [AppRoutes.NOT_FOUND]: "*",
}
