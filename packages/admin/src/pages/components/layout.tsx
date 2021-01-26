import { Layout as LayoutComp } from "../../components/layout";
import { useRecoilValue } from "recoil";
import { FC } from "react";
import { routeMenuState } from "../../routes";

export const Layout: FC = (props) => {
    const menu = useRecoilValue(routeMenuState);
    console.log(menu);

    return <LayoutComp menu={menu}>{props.children}</LayoutComp>;
};
