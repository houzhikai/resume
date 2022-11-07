import React from 'react';
import { Table, Space, Tag, Popconfirm, Typography, message } from 'antd';
import CustomBreadcrumb from '../../../components/CustomBreadcrumb';
import UseIntroduce from '../../../components/UseIntroduce';
import { DIV } from '../../../components/Div';
import { KeyTag } from '../../../components/Div';
import { dataSource } from './dataSource';
import './index.scss'

const BaseTab = () => {

  const handleDelete = (key: string) => {
    return dataSource.filter(item => item.key !== key);
  };
  const columns = [
    {
      title: '名字',
      dataIndex: 'name',
      key: 'name',
      render: (value: string, record: any) =>
        <div className={record.sex}>{value}</div>
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
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
      render: (text: any, record: any) => {
        return (
          <Space size="middle">
            <Typography.Link onClick={(e) => message.warn('新增功能暂未开通')}>新增</Typography.Link>
            <Popconfirm title="确定删除?" cancelText='取消' okText="确定" onConfirm={() => handleDelete(record.key)}>
              <Typography.Link>删除</Typography.Link>
            </Popconfirm>
          </Space>

        );
      }
    },
  ];

  const describe = <DIV>
    <DIV>
      想要固定左右栏时，在 columns 中设置<KeyTag>fixed 和 width</KeyTag> ，且最重要的是在组件中设置<KeyTag> scroll 的x，y 长度 </KeyTag>
    </DIV>
    <DIV>Pagination 属性改变分页器的位置，pagination 中的<KeyTag> defaultPageSize </KeyTag>属性可以改变每页的数据个数 </DIV>
  </DIV>;
  return (
    <>
      <CustomBreadcrumb arr={['表格', '最基本的表格']} />
      <UseIntroduce describe={describe} />
      {/* <Table columns={columns} dataSource={dataSource} scroll={{ x: 1500, y: 300 }} pagination={{ defaultPageSize: 5 }} /> */}
      <Table columns={columns} dataSource={dataSource} pagination={{ defaultPageSize: 5 }} />
    </>
  );
};

export default BaseTab;
