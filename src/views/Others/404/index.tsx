import { Button, Result } from 'antd';
import React from 'react';
import { useHistory } from 'react-router-dom';

const NotMatch: React.FC = () => {
  const history = useHistory()
  const handleClick = () => {
    history.push('/home')
  }
  return (
    <Result
      status="404"
      title="404"
      subTitle="对不起，找不到页面"
      extra={<Button type="primary" onClick={handleClick}>返回首页</Button>}
    />
  )
};

export default NotMatch;