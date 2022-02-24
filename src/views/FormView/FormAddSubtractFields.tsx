import React, { useState } from 'react';
import CustomBreadcrumb from '../../components/BreadCrumbs';
import UseIntroduce from '../../components/UseIntroduce';
import { Form, Button, Space, Select, Card, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { KeyTag } from '../../components/Div';
import styled from 'styled-components';
const FormWrapper = styled.div`
  background: white;
   padding: 10px; 
`
const FormCard = styled.div`
   display: flex;
   flex-direction: row;
   margin-bottom: 10px;
`
const RemoveButton = styled.div`
  margin: auto;

`
const DescribeP = styled.p`
  margin-bottom: 10px;
`

const { Option } = Select;

const FormAddSubtractFields = () => {
  const [formData, setFormData] = useState([]);

  const renderOptions = (options: any) => options.map((option: any) => (
    <Option key={option} value={option}>{option}</Option>
  ))

  const add = (index: number | undefined) => {
    let arr = JSON.parse(JSON.stringify(formData));
    if (index !== undefined) {
      arr[index].push({ key: `${formData.length}-${arr[index].length}` });
    } else {
      arr.push([{ key: `${formData.length}-0` }]);
    }
    setFormData(arr);
  };

  const remove = (GroupIndex: number, index: number | undefined) => {
    let arr = JSON.parse(JSON.stringify(formData));
    if (index !== undefined) {
      if (arr[GroupIndex].length === 1) {
        return message.error('首行不可删除')
      }
      arr[GroupIndex].splice(index, 1);
    } else {
      arr.splice(GroupIndex, 1);
    }
    setFormData(arr);
  }

  const handleSearch = (GroupIndex: number, index: number) => {
    let arr = JSON.parse(JSON.stringify(formData));
    arr[GroupIndex][index] = {
      ...arr[GroupIndex][index],
      nameOptions: ['业务场景码', '前置保障计划', '当前保障计划'],
    }
    setFormData(arr);
  }

  const onNameChange = (e: any, GroupIndex: number, index: number) => {
    let arr = JSON.parse(JSON.stringify(formData));
    // 进行数据请求获取相对应因子值，填充进 valueOption
    arr[GroupIndex][index] = {
      ...arr[GroupIndex][index],
      name: e,
      valueOption: ['一号项目增转商', '二号项目增转商', '三号项目增转商']
    };
    setFormData(arr);
  }
  const describe = <div>
    <DescribeP>1）这是套着两层的规则组，其中外面一层为规则组，里面是Card规则，第一个选择框先<KeyTag>搜索</KeyTag>选择，再展示第二个选择框展示出来。</DescribeP>
    <DescribeP>2）antd组件中有类似的组件，但是新增和删除都被封装成icon图片了，现在手动新增删除规则组，并且展示其文字。</DescribeP>
    <DescribeP>3）其中 Card 规则内首行不可删除。</DescribeP>
  </div>
  return (
    <>
      <CustomBreadcrumb arr={['表单', '动态增减嵌套字段']} />
      <UseIntroduce describe={describe} />
      <FormWrapper>
        {formData.map((GroupItem: any, GroupIndex: number) => (
          <FormCard>
            <Card style={{ width: '96%', background: '#f0f2f5' }}>
              {GroupItem.map((item: any, index: number) => (
                <Space key={item.key} style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Form.Item>
                    <Select
                      showSearch
                      style={{ width: 320 }}
                      filterOption={false}
                      placeholder="请选择规则名称"
                      onSearch={() => handleSearch(GroupIndex, index)}
                      onChange={(e: any) => onNameChange(e, GroupIndex, index)}
                    >
                      {renderOptions(item.nameOptions || [])}
                    </Select>
                  </Form.Item>
                  {item.valueOption ? <Form.Item>
                    <Select
                      mode="multiple"
                      allowClear
                      style={{ width: 320 }}
                      placeholder="请选择机构保险产品编码"
                    >
                      {renderOptions(item.valueOption)}
                    </Select>
                  </Form.Item> : null}
                  <div>
                    <Button type='link' onClick={() => add(GroupIndex)}>新增</Button>
                    <Button type='link' onClick={() => remove(GroupIndex, index)}>删除</Button>
                  </div>
                </Space>
              ))}
            </Card>
            <RemoveButton>
              <Button type='link' onClick={() => remove(GroupIndex, undefined)}>删除</Button>
            </RemoveButton>
          </FormCard>
        ))}
        <Button type="dashed" onClick={() => add(undefined)} block icon={<PlusOutlined />}>
          添加卡片
        </Button>
      </FormWrapper>
    </>
  );
}
export default FormAddSubtractFields;