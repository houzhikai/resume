import React from 'react';
import { Menu, Dropdown, Avatar, Typography, message } from 'antd';
import IconFont from '../../components/IconFont';
import styled from 'styled-components';
import { UserOutlined } from '@ant-design/icons';

const Wrapper = styled.div`
  height: 60px;
  box-shadow:  0 1px 1px -1px #333;
  background-color: #fff;
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
`
const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
`
const MenuItem = styled.span`
  margin-left: 8px;
`

const AppHeader = (props: any) => {
  let { menuClick, avatar, menuToggle } = props;
  const handleClick = () => {
    message.warn('该功能暂无开通')
  }
  const menu = (
    <Menu>
      <Menu.ItemGroup title='用户设置'>
        <Menu.Divider />
        <Menu.Item onClick={handleClick}>
          <IconFont type='icon-edit' />
          <MenuItem>个人设置</MenuItem>
        </Menu.Item>
        <Menu.Item onClick={handleClick}>
          <IconFont type='icon-settings' />
          <MenuItem>系统设置</MenuItem>
        </Menu.Item>
      </Menu.ItemGroup>
    </Menu>
  )
  return (
    <Wrapper>
      <IconFont
        style={{ fontSize: 30 }}
        onClick={menuClick}
        type={menuToggle ? 'icon-menu-fold' : 'icon-menu-unfold'}
      />
      <HeaderRight>
        <Typography.Link rel='noopener noreferrer' href='https://github.com/houzhikai/resume' target='_blank' >
          <IconFont type='icon-github' style={{ fontSize: 22, marginRight: 22 }} />
        </Typography.Link>
        <Dropdown overlay={menu} overlayStyle={{ width: '20rem' }}>
          <Avatar icon={<UserOutlined />} src={avatar} alt='avatar' style={{ cursor: 'pointer' }} /> 
        </Dropdown>
      </HeaderRight>
    </Wrapper>
  )
}

export default AppHeader
