import { useEffect, useState } from 'react';
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
const CodeWrapper = styled.div`
  display: flex;
`
const Login = () => {
  const [checkValue, setCheckValue] = useState(false);
  // 密码登录为 true，验证码为false
  const [loginWay, setLoginWay] = useState(true)
  const [time, setTime] = useState(60)
  const [isLoading, setIsLoading] = useState(false)

  const history = useHistory();

  useEffect(() => {
    if (isLoading) {
      let timer = setInterval(() => {
        if (time > 0) {
          setTime((c: number) => c - 1)
        } else {
          setIsLoading(false)
          setTime(60)
        }
      }, 1000)
      return () => clearInterval(timer)
    }
  }, [time, isLoading])



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
  // 切换登录方式
  const toggleLoginWays = () => {
    setLoginWay(c => !c)
  }

  const handleCountdown = () => {
    setIsLoading(!isLoading)
  }

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

          {
            loginWay ? (<>
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
            </>) : (<>
              <Form.Item
                label="手机号"
                name="phone"
                rules={[{
                  required: true,
                  pattern: /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[189]))\d{8}$/,
                  message: '请输入正确的手机号'
                }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="验证码"
                name="code"
                rules={[{ required: true, message: '请输入验证码' }]}
              >
                <CodeWrapper>
                  <Input />
                  <Button type='primary' onClick={handleCountdown} disabled={isLoading}>
                    <div style={{ width: 80 }}> {isLoading ? `${time}s` : '获取验证码'}</div>
                  </Button>
                </CodeWrapper>
              </Form.Item>

            </>)
          }

          <Form.Item name="reading" style={{ margin: ' 0 0 0 64px' }} >
            <Checkbox value={checkValue} onChange={onCheckValue}>
              阅读并理解 <a href='https://www.gwdang.com/static_page/privacy_policy.html' target='_blank' rel="noreferrer">此协议</a>
            </Checkbox>
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 4, span: 16 }}>
            <Checkbox>记住密码？</Checkbox>
          </Form.Item>

          <Form.Item name="button" wrapperCol={{ offset: 16 }}>
            <Button type='link' onClick={toggleLoginWays}>{loginWay ? '切换验证码登录' : '切换密码登录'}</Button>
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
