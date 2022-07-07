import React, { useState } from 'react';
import { Image, Form, Input, Button, Checkbox, message } from 'antd';
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  border: 1px solid #ccc;
  width: 1000px;
  height: 600px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-top: -300px;
  margin-left: -500px;
  display: flex;
`;
const Left = styled.div`
  width: 60%;
`;
const Right = styled.div`
  background: #fba;
  flex: 1;
`;
const Title = styled.div`
  font-size: 20px;
  color: white;
  text-align: center;
  margin-top: 120px;
  margin-bottom: 60px;
`;
const Login = () => {
  const [checkValue, setCheckValue] = useState(false);
  const history = useHistory();

  const onFinish = (values: { username: string, password: string; }) => {
    if (values.username !== 'admin' || values.password !== '123456') {
      message.error('用户名或密码输入错误！');
      return false;
    }
    history.push('./home');
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  // 同意协议
  const onCheckValue = (e: any) => {
    setCheckValue(e.target.checked);
  };

  return (
    <Wrapper>
      <Left >
        <Image src="https://s3.ifanr.com/wp-content/uploads/2022/02/ewqewq.jpg" preview={false} />
      </Left>
      <Right>
        <Title>欢迎来到 RESUME 系统</Title>
        <Form
          name="basic"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true, username: 'admin', password: '123456' }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="用户名"
            name="username"
            rules={[{ required: true, message: '请输入用户名!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="密码"
            name="password"
            rules={[{ required: true, message: '请输入密码!' }]}
          >
            <Input.Password visibilityToggle={false} />
          </Form.Item>

          <Form.Item name="reading" style={{ margin: ' 0 0 0 64px' }} >
            <Checkbox value={checkValue} onChange={onCheckValue}>
              阅读并理解 <a href='https://www.gwdang.com/static_page/privacy_policy.html' target='_blank' rel="noreferrer">此协议</a>
            </Checkbox>
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 4, span: 16 }}>
            <Checkbox>记住密码？</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button disabled={!checkValue} type="primary" htmlType="submit">
              登录
            </Button>
          </Form.Item>
        </Form>

      </Right>
    </Wrapper>
  );
};

export default Login;
