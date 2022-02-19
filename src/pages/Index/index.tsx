import React, { useReducer } from 'react'
import { Route } from 'react-router-dom'
import { Layout, BackTop } from 'antd'
import menu from './menu'
import AppAside from './AppAside'
const { Content } = Layout

const Index: React.FC = () => {
    const MENU_TOGGLE = 'menuToggle'
    const reducer = (state: any, action: any) => {
        switch (action.type) {
            case MENU_TOGGLE:
                return { ...state, menuToggle: !state.menuToggle }
            default:
                return state
        }
    }
    const [state, dispatch] = useReducer(reducer, { menuToggle: false })
    const menuClick = () => {
        dispatch({ type: 'menuToggle' })
    }
    return (
        <Layout>
            {/* 回到顶部 */}
            <BackTop />
            <AppAside menuToggle={state.menuToggle} menu={menu} />
        </Layout>
    )
}
export default Index

