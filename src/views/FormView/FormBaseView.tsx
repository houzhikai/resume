import React, { useState } from 'react';
import CustomBreadcrumb from '../../components/CustomBreadcrumb';
import UseIntroduce from '../../components/UseIntroduce';
import { DIV, FormWrapper } from '../../components/Div';
import { Button, Cascader, Checkbox, DatePicker, Divider, Form, Input, Radio, Rate } from 'antd';


const FormBaseView = () => {
  const [checkValue, setCheckValue] = useState(false);
  const formItemLayout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 8 },
  };
  const hobbyOptions = ['篮球', '足球', '羽毛球'];
  const casCaderOptions = [
    {
      value: '浙江',
      label: '浙江',
      children: [
        {
          value: '杭州',
          label: '杭州',
          children: [
            {
              value: '西湖',
              label: '西湖',
            },
          ],
        },
      ],
    },
    {
      value: '江苏',
      label: '江苏',
      disabled: true,
      children: [
        {
          value: '南京',
          label: '南京',
          children: [
            {
              value: '中华门',
              label: '中华门',
            },
          ],
        },
      ],
    },
  ];
  // 同意协议
  const onCheckValue = (e: any) => {
    setCheckValue(e.target.checked);
  };
  const onFinish = (e: any) => {
    const params = {
      address: e.address,
      birth: e.birth.format('YYYY-MM-DD'),
      confirm: e.confirm,
      email: e.email,
      hobby: e.hobby,
      password: e.password,
      phone: e.phone,
      rate: e.rate,
      reading: checkValue,
      sex: e.sex,
      user: e.user
    };
    console.log('params', params);
  };
  const describe =
    <DIV>
      一般不需要 value setValue 去设置 formItem 数据，因为 form 本身就封装过一遍。
    </DIV>;
  return (
    <>
      <CustomBreadcrumb arr={['表单', '基本表单 ']} />
      <UseIntroduce describe={describe} />
      <FormWrapper>
        <Divider>基本表单</Divider>
        <Form {...formItemLayout} onFinish={onFinish}>
          <Form.Item name="user" label="用户名" tooltip="可以想个好听点的名字" rules={[
            {
              required: true,
              message: '请输入用户名！'
            }
          ]}>
            <Input placeholder="请输入用户名" autoComplete='off' />
          </Form.Item>
          <Form.Item name="sex" label="性别" rules={[
            {
              required: true,
              message: '请选择性别！'
            }
          ]}>
            <Radio.Group>
              <Radio value="man">男</Radio>
              <Radio value="woman">女</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item name="hobby" label="爱好" rules={[
            {
              required: true,
              message: '请选择您的爱好！'
            }
          ]}>
            <Checkbox.Group options={hobbyOptions} />
          </Form.Item>
          <Form.Item name="birth" label="出生年月" rules={[
            {
              required: true,
              message: '请输入出生年月！'
            }
          ]}>
            <DatePicker style={{ minWidth: 415 }} placeholder="请选择日期" />
          </Form.Item>
          <Form.Item
            name="email"
            label="邮箱"
            rules={[
              {
                type: 'email',
                message: '这不是邮箱地址',
              },
              {
                required: true,
                message: '请输入邮箱',
              },
            ]}
          >
            <Input placeholder='请输入邮箱地址' autoComplete='off' />
          </Form.Item>
          <Form.Item
            name="password"
            label="密码"
            rules={[
              {
                required: true,
                message: '请输入密码!',
              },
            ]}
            hasFeedback
          >
            <Input.Password placeholder='请输入密码' />
          </Form.Item>
          <Form.Item
            name="confirm"
            label="确认密码"
            dependencies={['password']}
            hasFeedback
            rules={[
              {
                required: true,
                message: '请再次确认密码!',
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('两次密码不一样!'));
                },
              }),
            ]}
          >
            <Input.Password placeholder='请输入密码' />
          </Form.Item>
          <Form.Item name="address" label="家庭地址" rules={[{ required: true, message: "请输入家庭地址" }]}>
            <Cascader options={casCaderOptions} placeholder='请选择家庭地址' />
          </Form.Item>
          <Form.Item name="phone" label="联系电话" rules={[{ required: true, message: "请输入联系电话" }]}>
            <Input placeholder='请输入联系电话' autoComplete='off' />
          </Form.Item>
          <Form.Item name="rate" label="评分" rules={[{ required: true, message: "请打分" }]}>
            <Rate allowHalf />
          </Form.Item>
          <Form.Item name="reading" style={{ marginLeft: 320 }} >
            <Checkbox value={checkValue} onChange={onCheckValue}>
              阅读并理解 <a href='https://www.gwdang.com/static_page/privacy_policy.html' target='_blank' rel="noreferrer">此协议</a>
            </Checkbox>
          </Form.Item>
          <Form.Item >
            <Button type='primary' style={{ marginLeft: 320 }} disabled={checkValue ? false : true} htmlType='submit'>注册</Button>
          </Form.Item>
        </Form>
      </FormWrapper>
    </>
  );
};

export default FormBaseView;
