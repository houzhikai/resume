import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import { Form, Input, Button, Radio, message } from "antd";
import CustomBreadcrumb from '../../components/BreadCrumbs';
import UseIntroduce from "../../components/UseIntroduce"

const FormLayout = () => {
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState("horizontal");

  useEffect(() => {
    form.setFieldsValue({
      layout: formLayout ?? "horizontal",
      inputA: "",
      inputB: "",
      ignore: true
    })
  }, [formLayout, form]);

  const formItemLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 14 }
  };

  const handleFinishForm = (e: any) => {
    const params = {
      layout: e.layout,
      inputA: e.inputA,
      inputB: e.inputB,
      ignore: e.ignore
    }
    console.log('params', params);
    message.info('提交成功')
  };
  return (
    <>
      <CustomBreadcrumb arr={['表单', 'FORM切换']} />
      <UseIntroduce
        describe='该表单记录了多个 tabs 共用了同一个输入框、单选框 ， 当切换 tabs 时，输入框和单选框可以自动清空里面所选的数据，
          确认按钮已经填写完整，接入了接口参数 params 中，后续可以直接使用。'
      />
      <Form
        style={{ background: 'white', padding: 20 }}
        {...formItemLayout}
        form={form}
        initialValues={{
          layout: formLayout
        }}
        onFinish={handleFinishForm}
      >
        <Form.Item label="Form Layout" name="layout">
          <Radio.Group
            value={formLayout}
            onChange={(e) => setFormLayout(e.target.value)}
          >
            <Radio.Button value="horizontal">Horizontal</Radio.Button>
            <Radio.Button value="vertical">Vertical</Radio.Button>
            <Radio.Button value="inline">Inline</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Field A" name="inputA">
          <Input
            placeholder="input placeholder"
          />
        </Form.Item>
        <Form.Item
          label="Field B"
          name="inputB"
        >
          <Input placeholder="input placeholder" />
        </Form.Item>
        <Form.Item label="Field C" name="ignore">
          <Radio.Group>
            <Radio value={true}>忽略</Radio>
            <Radio value={false}>不忽略</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ marginLeft: 110 }}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
export default FormLayout;
