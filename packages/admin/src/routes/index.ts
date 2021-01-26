import { Dashboard } from "../pages/Dashboard";
import { Home } from "../pages/Home";
import { User } from "../pages/User";
import { atom, selector } from "recoil";
import { FC } from "react";
import { depthFirstSearch } from "../utils/depth-first-search";
import { Layout } from "../pages/components/layout";
import { MyAside } from "../components/layout";

export interface Route {
    path: string;
    title?: string;
    component?: FC<any>;
    children?: Route[];
}

export interface RouteConfig {
    routes: Route[];
}

export const routeConfig: RouteConfig = {
    routes: [
        {
            path: "/admin",
            component: Layout,
            children: [
                {
                    path: "/app",
                    title: "APP",
                    component: MyAside,
                    children: [
                        {
                            path: "/dashboard",
                            title: "Dashboard",
                            component: Dashboard,
                        },
                        {
                            path: "/home",
                            title: "Home",
                            component: Home,
                        },
                        {
                            path: "/system",
                            title: "System",
                            children: [
                                {
                                    path: "/user",
                                    title: "User",
                                    component: User,
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
};

export const routeState = atom({
    key: "routeState",
    default: routeConfig,
});

export interface RoutePath {
    path: string;
    component: FC;
}

/**
 * 生成路由配置信息
 */
export const routePathsState = selector<RoutePath[]>({
    key: "routePathsState",
    get: ({ get }) => {
        const targetPaths: RoutePath[] = [];
        const { routes } = get(routeState);
        depthFirstSearch(routes, "path", "children", (node, paths, parent) => {
            if (node.component) {
                const path: RoutePath = {
                    path: paths.join(""),
                    component: node.component,
                };
                targetPaths.push(path);
            }
        });
        return targetPaths;
    },
});

/**
 * 菜单生成
 */
export const routeMenuState = selector<Route[]>({
    key: "routeMenuState",
    get: ({ get }) => {
        const { routes } = get(routeState);
        return depthFirstSearch(
            routes,
            "path",
            "children",
            (node, paths, parent) => {
                return {
                    ...node,
                    path: paths.join(""),
                };
            },
        );
    },
});
