import React from 'react';
import { Table, Space, Tag, Popconfirm, Typography, message } from 'antd';
import CustomBreadcrumb from '../../components/CustomBreadcrumb';
import UseIntroduce from '../../components/UseIntroduce';
import { DIV } from '../../components/Div';
import { KeyTag } from '../../components/Div';


const BaseTab = () => {
  const dataSource = [
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

  const handleDelete = (key: string) => {
    console.log('????????????', dataSource, key);
    return dataSource.filter(item => item.key !== key);
  };
  const columns = [
    {
      title: '??????',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '??????',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '??????',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '??????',
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
      title: '??????',
      key: 'action',
      render: (text: any, record: any) => {
        return (
          <Space size="middle">
            <Typography.Link onClick={(e) => message.warn('????????????????????????')}>??????</Typography.Link>
            <Popconfirm title="?????????????" cancelText='??????' okText="??????" onConfirm={() => handleDelete(record.key)}>
              <Typography.Link>??????</Typography.Link>
            </Popconfirm>
          </Space>

        );
      }
    },
  ];

  const describe = <DIV>
    <DIV>
      ?????????????????????????????? columns ?????????<KeyTag>fixed ??? width</KeyTag> ???????????????????????????????????????<KeyTag> scroll ???x???y ?????? </KeyTag>
    </DIV>
    <DIV>Pagination ?????????????????????????????????pagination ??????<KeyTag> defaultPageSize </KeyTag>??????????????????????????????????????? </DIV>
  </DIV>;
  return (
    <>
      <CustomBreadcrumb arr={['??????', '??????????????????']} />
      <UseIntroduce describe={describe} />
      {/* <Table columns={columns} dataSource={dataSource} scroll={{ x: 1500, y: 300 }} pagination={{ defaultPageSize: 5 }} /> */}
      <Table columns={columns} dataSource={dataSource} pagination={{ defaultPageSize: 5 }} />
    </>
  );
};

export default BaseTab;
