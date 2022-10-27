import { Spin } from 'antd';
import './styles/loading.scss';
import { LoadingOutlined } from '@ant-design/icons';
import React from 'react';

const Loading = () => {
  const antIcon = <LoadingOutlined style={{ fontSize: 12 }} spin />;

  return (
    <div className="wrapper">
      <Spin indicator={antIcon} />
      <span className="loading">
        正在加载中<span className='dot'>...</span>
      </span>
    </div>
  );
}

export default Loading;
