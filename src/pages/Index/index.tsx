import React, { useState, useReducer } from 'react'
import { Route, Switch, Redirect, useHistory } from 'react-router-dom'
import { Breadcrumb, Layout } from 'antd'
import menus from './menu'
import routes from '../../routes'
import AppAside from './AppAside'
import AppHeader from './AppHeader'
import AppFooter from './AppFooter'
import '../../style/layout.scss'

const { Content } = Layout

const MENU_TOGGLE = 'menuToggle'

const reducer = (state: any, action: any) => {
    switch (action.type) {
        case MENU_TOGGLE:
            return { ...state, menuToggle: !state.menuToggle }
        default:
            return state
    }
}
const getMenu = (menu: any) => {
    let newMenu,
        auth = JSON.parse(localStorage.getItem('user') || '').auth
    if (!auth) {
        return menu
    } else {
        newMenu = menu.filter((res: any) => res.auth && res.auth.indexOf(auth) !== -1)
        return newMenu
    }
}
const Index: React.FC = (props) => {
    const [state, dispatch] = useReducer(reducer, { menuToggle: false })
    const history = useHistory()

    const [menu] = useState(() => {
        if (!localStorage.getItem('user')) {
            history.push('/')
            return []
        } else {
            return getMenu(menus)
        }
    })
    let { auth } = JSON.parse(localStorage.getItem('user') || '') ?? ""
    const handleMenuClick = () => {
        dispatch({ type: 'menuToggle' })
    }
    return (
        <Layout>
            <AppAside menuToggle={state.menuToggle} menu={menu} />
            <Layout style={{ display: 'flex', height: '100vh', flexDirection: 'column' }}>
                <AppHeader menuToggle={state.menuToggle} menuClick={handleMenuClick} />
                <Content style={{ flex: 1, overflowY: 'auto', padding: 20 }}>
                    <Switch>
                        {
                            routes.map((item: any) => {
                                return (
                                    <Route
                                        key={item.path}
                                        path={item.path}
                                        exact={item.exact}
                                        render={props =>
                                            !auth ? (
                                                <item.component {...props} />
                                            ) : item.auth && item.auth.indexOf(auth) !== -1 ? (
                                                <item.component {...props} />
                                            ) : (
                                                // 这里也可以跳转到 403 页面
                                                <Redirect to='/404' {...props} />
                                            )
                                        }
                                    />
                                )
                            })
                        }
                    </Switch>
                </Content>
                <AppFooter />
            </Layout>
        </Layout>
    )
}
export default Index

