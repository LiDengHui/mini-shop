import { createRouter, createWebHistory } from "vue-router";

const routerHistory = createWebHistory();

import Home from "/@/pages/home/home.vue";
import Category from "/@/pages/category/category.vue";
import Cart from "/@/pages/cart/cart.vue";
import Personal from "/@/pages/personal/personal.vue";
import Theme from "/@/pages/theme/theme.vue";
import Detail from "/@/pages/detail/detail.vue";
import Address from "/@/pages/address/address.vue";

const router = createRouter({
    history: routerHistory,
    routes: [
        {
            path: "/",
            name: "Home",
            component: Home,
        },
        {
            path: "/category",
            name: "Category",
            component: Category,
        },
        {
            path: "/cart",
            name: "Cart",
            component: Cart,
        },
        {
            path: "/personal",
            name: "Personal",
            component: Personal,
        },
        {
            path: "/theme",
            name: "Theme",
            component: Theme,
        },
        {
            path: "/detail/:id",
            name: "Detail",
            component: Detail,
        },
        {
            path: "/address",
            name: "Address",
            component: Address,
        },
    ],
});

export default router;
