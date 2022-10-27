import React from 'react';
import { Breadcrumb } from 'antd';
import { Link, useLocation } from 'react-router-dom';


const CustomBreadcrumb = (props: { arr: string[], href: string }) => {
  const location = useLocation()
  const { arr, href } = props
  return (
    <Breadcrumb style={{ marginBottom: 16 }}>
      <Breadcrumb.Item>
        首页
      </Breadcrumb.Item>
      {
        arr.map((res: string) => {
          // if (typeof res === 'object') {
          //   return (
          //     <Breadcrumb.Item key={res.path} >
          //       <Link to={href ?? location.pathname}>{res.title}</Link>
          //     </Breadcrumb.Item>
          //   );
          // } else {
          return <Breadcrumb.Item key={res}>
            <Link to={href ?? location.pathname}>{res}</Link>
          </Breadcrumb.Item>;
          // }
        })
      }
    </Breadcrumb>
  );
};

export default CustomBreadcrumb;
