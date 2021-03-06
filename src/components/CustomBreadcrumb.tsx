import React from 'react';
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';


const CustomBreadcrumb = (props: any) => {
  return (
    <Breadcrumb style={{ marginBottom: 16 }}>
      <Breadcrumb.Item>
        首页
      </Breadcrumb.Item>
      {
        props?.arr?.map((res: any) => {
          if (typeof res === 'object') {
            return (
              <Breadcrumb.Item key={res.path}>
                <Link to={res.path}>{res.title}</Link>
              </Breadcrumb.Item>
            );
          } else {
            return <Breadcrumb.Item key={res}>{res}</Breadcrumb.Item>;
          }
        })
      }
    </Breadcrumb>
  );
};

export default CustomBreadcrumb;
