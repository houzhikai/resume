import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Dropdown, Menu, Space } from 'antd';
import React, { useState } from 'react';
import '../style/dropdown.scss'

const DropdownButton: React.FC = () => {
  const [barrageType, setBarrageType] = useState('用户')
  
  const handleMenuClick: MenuProps['onClick'] = e => {
    setBarrageType(e.key)
  };
  const items = [
    {
      label: '仅内容',
      key: '仅内容',
    },
    {
      label: '用户',
      key: '用户',
    },
  ]
  const menu = (
    <Menu onClick={handleMenuClick}
      items= {items}
    />
  );
  return (
    <div className='wrapper'>
      <Dropdown overlay={menu}>
        <Button type='text'>
          <Space>
           <div className='barrageType'> { barrageType } </div>  <DownOutlined />
          </Space>
        </Button>
      </Dropdown>
    </div>
  );
}

export default DropdownButton;
