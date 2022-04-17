import React from 'react';
import styled from 'styled-components';
import { Image, Form, Input, Button, Checkbox, message } from 'antd';
import { useHistory } from "react-router-dom";

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

function Login() {
  const history = useHistory();

  const onFinish = (values: { username: string, password: string; }) => {
    if (values.username !== 'admin' || values.password !== '123456') {
      message.error('用户名或密码输入错误！');
      return false;
    }
    history.push('./index');
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
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
            <Input.Password />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 4, span: 16 }}>
            <Checkbox>记住密码？</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              登录
            </Button>
          </Form.Item>
        </Form>

      </Right>
    </Wrapper>
  );
};

export default Login;
