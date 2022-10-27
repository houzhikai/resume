import React from 'react';
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';


const CustomBreadcrumb = (props: any) => {
  const { arr, href } = props

  return (
    <Breadcrumb style={{ marginBottom: 16 }}>
      <Breadcrumb.Item>
        首页
      </Breadcrumb.Item>
      {
        arr.map((res: any) => {
          if (typeof res === 'object') {
            return (
              <Breadcrumb.Item key={res.path} >
                <Link to={href}>{res.title}</Link>
              </Breadcrumb.Item>
            );
          } else {
            return <Breadcrumb.Item key={res}>
              <Link to={href}>{res}</Link>
            </Breadcrumb.Item>;
          }
        })
      }
    </Breadcrumb>
  );
};

export default CustomBreadcrumb;
