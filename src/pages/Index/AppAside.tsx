import React from 'react';
import { Layout, Typography } from 'antd';
import {
    CloudSyncOutlined
} from '@ant-design/icons';
import CustomMenu from '../../components/CustomMenu'
import styled from 'styled-components';

const { Sider } = Layout;

const DIV = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px 0;
    border-bottom: 1px solid #666;
`
const Title = styled.span`
    color: white;
    font-size: 20px;
    margin-left: 6px;
    vertical-align: middle;
`

interface AppAsideProps {
    menuToggle: any;
    menu: any;
}
const AppAside = (props: AppAsideProps) => {
    const { menuToggle, menu } = props;

    return (
        <Sider style={{ minHeight: '100vh' }} collapsed={menuToggle}>
            <DIV >
                <Typography.Link rel='noopener noreferrer' href='https://github.com/houzhikai/resume' target='_blank'>
                    <CloudSyncOutlined style={{ fontSize: '2.6rem', color: '#fff', verticalAlign: 'middle' }} />
                    <Title>{menuToggle ? '' : '智能操作平台'}</Title>
                </Typography.Link>
            </DIV>
            <CustomMenu menu={menu} />
        </Sider>
    );
}
export default AppAside;
