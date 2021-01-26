import {Layout as LayoutComp} from "../../components/layout";
import {useRecoilValue} from "recoil";
import {FC} from "react";
import {routeMenuState} from "src/routes";
import {translateArrayToObject} from "src/utils/translate-array-to-object";

export const Layout: FC = (props) => {
    const menu = useRecoilValue(routeMenuState);
    const obj = translateArrayToObject(menu, 'path', 'children');
    console.log(obj);
    return <LayoutComp menu={menu}>{props.children}</LayoutComp>;
};
