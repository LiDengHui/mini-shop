import React, { FC } from "react";
import { useHistory } from "react-router-dom";
import { Layout as AntLayout, Menu } from "antd";
import { SelectEventHandler } from "rc-menu/lib/interface.d";
import { UserOutlined } from "@ant-design/icons";

import logo from "../../logo.svg";
import "./layout.scss";
import { Route } from "../../routes";

const { SubMenu, Item } = Menu;
const { Header, Sider } = AntLayout;

export interface LayoutProps {
    leftMenuKey?: string;
    menu: Route[];
}

export const MyHeader: FC<{ menu: Route[] }> = ({ menu, children }) => {
    return (
        <AntLayout className="shop-layout">
            <Header className="header">
                <img src={logo} alt="" className="logo" height="31" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={["2"]}
                >
                    {menu.map((e) => {
                        return <Item key={e.path}>{e.title}</Item>;
                    })}
                </Menu>
            </Header>
            {children}
        </AntLayout>
    );
};

export const MyAside: FC<{ menu: Route[] }> = ({ menu, children }) => {
    const history = useHistory();
    const onSelect: SelectEventHandler = (info) => {
        history.push({ pathname: info.key as string });
    };
    const { pathname } = history.location;

    return (
        <AntLayout>
            <Sider width={200} className="site-layout-background">
                <Menu
                    mode="inline"
                    defaultSelectedKeys={[pathname]}
                    defaultOpenKeys={["sub1"]}
                    style={{ height: "100%", borderRight: 0 }}
                    onSelect={onSelect}
                >
                    {menu.map((e) => {
                        if (e.children && e.children.length > 0) {
                            return (
                                <SubMenu
                                    key={e.path}
                                    icon={<UserOutlined />}
                                    title={e.title}
                                >
                                    {e.children.map((i) => {
                                        return (
                                            <Item key={i.path}> {i.title}</Item>
                                        );
                                    })}
                                </SubMenu>
                            );
                        } else {
                            return <Item key={e.path}> {e.title}</Item>;
                        }
                    })}
                </Menu>
            </Sider>
            {children}
        </AntLayout>
    );
};
export const Layout: FC<LayoutProps> = (props) => {
    return (
        <MyHeader menu={props.menu}>
            <MyAside menu={props.menu[0].children || []}>
                <AntLayout style={{ padding: "0 24px 24px" }}>
                    {props.children}
                </AntLayout>
            </MyAside>
        </MyHeader>
    );
};
