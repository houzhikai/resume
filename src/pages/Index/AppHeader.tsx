import React, { useEffect, useState } from "react";
import {
  Menu,
  Dropdown,
  Avatar,
  Typography,
  message,
  Popconfirm,
  Modal,
  Button,
  Form,
  Input,
} from "antd";
import IconFont from "../../components/IconFont";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Wrapper = styled.div`
  height: 60px;
  box-shadow: 0 1px 1px -1px #333;
  background-color: #fff;
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
  border: 1px solid #ccc;
`;
const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
`;
const MenuItem = styled.span`
  margin-left: 8px;
`;
const Username = styled.div`
  color: #000;
  font-weight: 700;
  margin-left: 16px;
  cursor: pointer;
  font-family: "source-code-pro", "Menlo", "Monaco", "Consolas", "Courier New",
    "monospace";
`;

// interface MenuProps {
//   key?: string;
//   icon?: any;
//   label?: any;
//   disabled?: boolean;
//   type?: string;
// }
const AppHeader = (props: any) => {
  const [visible, setVisible] = useState(false);
  const [username, setUsername] = useState("测试名字");
  let { menuClick, menuToggle } = props;
  useEffect(() => {
    const name = JSON.parse(window.localStorage.getItem("name") as string);
    setUsername(name);
  }, [username]);

  const history = useHistory();
  const [form] = Form.useForm();

  const handleOk = async () => {
    setVisible(true);
    // 拿到 form 表单的值
    const values = await form.validateFields();
    window.localStorage.setItem("name", JSON.stringify(values.name));
    setUsername(values.name);
    setVisible(false);
  };
  const handleClick = () => {
    message.warn("该功能暂无开通");
  };
  const handleExit = () => {
    history.push("/login");
  };
  const menuItems: any = [
    {
      key: "1",
      label: <div>用户设置</div>,
      icon: "",
      disabled: true,
    },
    {
      type: "divider",
    },
    {
      key: "2",
      label: <div onClick={() => setVisible(true)}>个人设置</div>,
      icon: <IconFont type="icon-edit" />,
    },
    {
      key: "3",
      label: <div onClick={handleClick}>系统设置</div>,
      icon: <IconFont type="icon-settings" />,
    },
    {
      key: "4",
      label: (
        <Popconfirm
          title="确定退出登录?"
          cancelText="取消"
          okText="确定"
          onConfirm={() => handleExit()}
        >
          <MenuItem>退出登录</MenuItem>
        </Popconfirm>
      ),
      icon: <IconFont type="icon-tuichu" />,
    },
  ];
  const menu = <Menu items={menuItems} />;
  return (
    <Wrapper>
      <IconFont
        style={{ fontSize: 30 }}
        onClick={menuClick}
        type={menuToggle ? "icon-menu-fold" : "icon-menu-unfold"}
      />
      <HeaderRight>
        <Typography.Link
          rel="noopener noreferrer"
          href="https://www.yuque.com/dashboard"
          target="_blank"
        >
          <IconFont
            type="icon-yuque"
            style={{ fontSize: 22, marginRight: 22 }}
          />
        </Typography.Link>
        <Typography.Link
          rel="noopener noreferrer"
          href="https://github.com/houzhikai/resume"
          target="_blank"
        >
          <IconFont
            type="icon-github"
            style={{ fontSize: 22, marginRight: 22 }}
          />
        </Typography.Link>
        <Dropdown
          trigger={["click"]}
          overlay={menu}
          overlayStyle={{ width: "20rem" }}
        >
          <Avatar
            src="https://joeschmoe.io/api/v1/random"
            alt="avatar"
            style={{ cursor: "pointer" }}
          />
        </Dropdown>
        <Username onClick={() => setVisible(true)}>{username}</Username>
      </HeaderRight>
      <Modal
        title="个人中心"
        visible={visible}
        onCancel={() => setVisible(false)}
        footer={[
          <Button onClick={() => setVisible(false)}>取消</Button>,
          <Button type="primary" onClick={handleOk}>
            确定
          </Button>,
        ]}
      >
        <Form
          form={form}
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 10 }}
          initialValues={{ name: username }}
          autoComplete="off"
        >
          <Form.Item label="修改用户名" name="name">
            <Input placeholder="请输入用户名" />
          </Form.Item>
        </Form>
      </Modal>
    </Wrapper>
  );
};

export default AppHeader;
