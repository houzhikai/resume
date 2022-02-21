import React from 'react';
import { Table, Space, Tag, message, Typography } from 'antd';
import CustomBreadcrumb from '../../components/BreadCrumbs';
import UseIntroduce from '../../components/UseIntroduce';
import { DIV } from '../../components/Div';
import { KeyTag } from '../../components/Div';

const BaseTab = () => {
  const columns = [
    {
      title: '名字',
      dataIndex: 'name',
      key: 'name',
      fixed: 'left',
      render: (text: any) => <span>{text}</span>,
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
      fixed: 'left',
    },
    {
      title: '备注',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '标签',
      key: 'tags',
      dataIndex: 'tags',
      render: (tags: any) => (
        <>
          {tags.map((tag: any) => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser' || tag === 'warning') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: '行为',
      key: 'action',
      render: (text: any, record: any) => (
        <Space size="middle">
          <Typography.Link onClick={() => message.warn('功能还未完成')}>新增</Typography.Link>
          <Typography.Link onClick={() => message.warn('功能还未完成')}>删除</Typography.Link>
        </Space>
      ),
    },
  ];

  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser', 'warning'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
    {
      key: '4',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
    {
      key: '5',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
    {
      key: '6',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
    {
      key: '7',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
    {
      key: '8',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
    {
      key: '9',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
    {
      key: '10',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
    {
      key: '11',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
    {
      key: '12',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];

  const describe = <DIV>
    <DIV>
      想要固定左右栏时，在 columns 中设置<KeyTag>fixed 和 width</KeyTag> ，且最重要的是在组件中设置<KeyTag> scroll 的x，y 长度 </KeyTag>
    </DIV>
    <DIV>Pagination 属性改变分页器的位置，pagination 中的<KeyTag> defaultPageSize </KeyTag>属性可以改变每页的数据个数 </DIV>
  </DIV>
  return (
    <>
      <CustomBreadcrumb arr={['表格', '最基本的表格']} />
      <UseIntroduce describe={describe} />
      <Table columns={columns} dataSource={data} scroll={{ x: 1500, y: 300 }} pagination={{ defaultPageSize: 5 }} />
    </>
  );
}

export default BaseTab;
