import React, { useEffect, useState } from 'react';
import { Menu, } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import IconFont from './IconFont';

const getOpenKeys = (data: string) => {
    let newStr = '';
    let newArr = [];
    let arr = data.split('/').map((item: string) => '/' + item);
    for (let i = 1; i < arr.length - 1; i++) {
        newStr += arr[i]
        newArr.push(newStr)
    }
    return newArr
}

interface CustomMenuProps {
    menu: any;
    location?: any;
}
const CustomMenu = (props: CustomMenuProps) => {
    const location = useLocation();
    const [state, setState] = useState({
        openKeys: [],
        selectedKeys: []
    })
    let { openKeys, selectedKeys } = state;
    // TODO
    // 页面刷新的时候可以定位到 menu 显示
    useEffect(() => {
        let { pathname } = location
        setState((prevState: any) => {
            return {
                ...prevState,
                selectedKeys: [pathname],
                openKeys: getOpenKeys(pathname)
            }
        })
    }, [props, location])
    // 只展开一个 Submenu
    const onOpenChange = (openKeys: any) => {
        console.log(openKeys)
        setState((pre: any) => {
            if (openKeys.length === 0 || openKeys.length === 1) {
                return { ...pre, openKeys }
            }
            const latestOpenKey = openKeys[openKeys.length - 1]
            // 自定义的路由规则
            if (latestOpenKey.includes(openKeys[0])) {
                return { ...pre, openKeys }
            } else {
                return { ...pre, openKeys: [latestOpenKey] }
            }
        })
    }

    const renderMenuItem = ({ key, icon, title }: any) => (
        <Menu.Item key={key}>
            <Link to={key}>
                {icon && <IconFont type={icon} />}
                <span>{title}</span>
            </Link>
        </Menu.Item>
    )
    // 遍历子项 subs
    const renderSubMenu = ({ key, icon, title, subs }: any) => {
        return (
            <Menu.SubMenu
                key={key}
                title={
                    <span>
                        {icon && <IconFont type={icon} />}
                        <span> {title}</span>
                    </span>
                }
            >
                {
                    subs && subs.map((item: any) => {
                        return item.subs && item.subs.length > 0 ? renderSubMenu(item) : renderMenuItem(item)
                    })
                }
            </Menu.SubMenu>
        )
    }
    return (
        <Menu
            mode='inline'
            theme='dark'
            openKeys={openKeys}             //当前展开的 Submenu 菜单项
            selectedKeys={selectedKeys}     // 当前选中的菜单项 key 数组
            onClick={({ key }) => setState((prevState: any) => ({ ...prevState, selectedKeys: [key] }))}
            onOpenChange={onOpenChange}     // Submenu 展开、关闭的回调
        >
            {
                props.menu.map((item: any) => {
                    return item.subs && item.subs.length > 0 ? renderSubMenu(item) : renderMenuItem(item)
                })
            }
        </Menu>
    );
}

export default CustomMenu;
