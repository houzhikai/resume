import { DownOutlined } from '@ant-design/icons';
import { MenuProps, Tooltip } from 'antd';
import { Button, Dropdown, Menu, Space } from 'antd';
import React, { useState } from 'react';
import '../style/dropdown.scss'

interface Props {
  getCount: Function
}

const DropdownButton: React.FC<Props> = (props) => {
  const { getCount } = props
  const [barrageType, setBarrageType] = useState('用户')
  
  const handleMenuClick: MenuProps['onClick'] = e => {
    setBarrageType(e.key)
    getCount(e.key)
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
    <Menu onClick={handleMenuClick} items= {items} />
  );
  return (
    <div className='wrapper'>
      <Dropdown overlay={menu} trigger={['click']}>
        <Button type='text'>
          <Tooltip
            title={barrageType === '用户' ? '弹幕类型为头像和内容' : '弹幕类型为仅展示内容'}
            className='tooltipStyle'>
            <div className='barrageType'> { barrageType } </div>  <DownOutlined />
          </Tooltip>
        </Button>
      </Dropdown>
    </div>
  );
}

export default DropdownButton;
