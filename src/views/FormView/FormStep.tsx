import React, { useState } from 'react';
import { Steps, Divider, Form, Select, Input, Button, message, Result, Typography } from 'antd'
import CustomBreadcrumb from '../../components/BreadCrumbs';
import UseIntroduce from '../../components/UseIntroduce';
import { DIV, KeyTag, FormWrapper } from '../../components/Div';

const { Step } = Steps
const { Option } = Select
const { Text } = Typography

const FormStepView = () => {
  const [current, setCurrent] = useState(0)
  const [formData, setFormData] = useState<any>({})

  // 步骤条样式
  const formItemLayout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 8 },
  }

  const Step1Form = () => {
    // 自定义校验
    const validateUsername = (rule: any, value: any) => {
      // 校验手机号
      const reg = /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[189]))\d{8}$/;
      if (!(reg.test(value))) return Promise.reject('请输入正确的手机号');
      return Promise.resolve();
    }
    const renderOpts = () => {
      const option = ['小明', '小红', '小丽']
      return option.map((opt: any) => <Option key={opt} value={opt}>{opt}</Option>)
    }
    const prefixSelector = (
      <Form.Item name="prefix" noStyle>
        <Select style={{ width: 100 }}>
          <Option value="手机号">手机号</Option>
          <Option value="微信">微信</Option>
        </Select>
      </Form.Item>
    );
    const onFinish = (e: any) => {
      if (!e.email || !e.note || !e.phone || !e.prefix || !e.recipient) {
        message.error('请完成必填选项')
        setCurrent(current)
      } else {
        setFormData(e)
        setCurrent(current + 1)
      }
    }
    return (
      <Form
        {...formItemLayout}
        initialValues={{
          recipient: formData.recipient || null,
          email: formData.email || null,
          note: formData.note || null,
          phone: formData.phone || null,
          prefix: formData.prefix || '手机号',
        }}
        onFinish={onFinish} >
        <Form.Item
          name="recipient"
          label="接收人" rules={[
            {
              required: true,
              message: '请选择接收人',
            },
          ]}>
          <Select>
            {renderOpts()}
          </Select>
        </Form.Item>
        <Form.Item
          name="email"
          label="接收邮箱"
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
          <Input placeholder='请输入邮箱地址' />
        </Form.Item>
        <Form.Item
          name="note"
          label="内容"
          rules={[
            {
              required: true,
              message: '请输入内容',
            },
          ]}>
          <Input placeholder="请输入内容" />
        </Form.Item>
        <Form.Item
          name="phone"
          label="联系方式"
          required
          rules={[
            {
              required: true,
              message: '请输入正确的手机号格式',
            },
            {
              validator: validateUsername
            }
          ]}
        >
          <Input placeholder="首先选择联系方式" addonBefore={prefixSelector} />
        </Form.Item>
        <Button type='primary' style={{ marginLeft: 360 }} htmlType="submit">下一步</Button>
      </Form>
    )
  }
  const Step2Form = () => {
    const [loading, setLoading] = useState(false)
    const handlePre = () => {
      setCurrent(current - 1)
    }
    const handleSubmit = () => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setCurrent(current + 1);
      }, 2000);
    }
    return (
      <Form {...formItemLayout}>
        <Form.Item label="接收人">{formData.recipient}</Form.Item>
        <Form.Item label="接收邮箱">{formData.email}</Form.Item>
        <Form.Item label="内容">{formData.note}</Form.Item>
        <Form.Item label="联系渠道">{formData.prefix}</Form.Item>
        <Form.Item label="联系方式">{formData.phone}</Form.Item>
        <>
          <Button style={{ marginLeft: 360 }} onClick={handlePre}>上一步</Button>
          <Button type='primary' loading={loading} style={{ marginLeft: 10 }} onClick={handleSubmit} >提交</Button>
        </>
      </Form>
    )
  }
  const Step3Form = () => {
    return (
      <Result
        status="success"
        title="发送成功"
        subTitle="耐心等待好消息吧！"
        extra={[
          <Button
            type='primary'
            key='console'
            onClick={() => {
              setCurrent(0);
              setFormData({});
            }}>
            再发一封
          </Button>,
          <Button key='buy' onClick={() => message.info('暂时没有记录！')}>查看记录</Button>
        ]}
      />
    )
  }

  const describe =
    <DIV>
      <DIV>第二页怎么能拿到第一页的值？ 根据button 按钮用 htmlType 为 summit ；Form 组件 onFinish 将里面的数据提取出来。</DIV>
      <DIV>暂存的问题:</DIV>
      <DIV>1）<Text delete>第一页<KeyTag>接收人和内容</KeyTag>没有做校验处理。</Text></DIV>
      <DIV>2）<Text delete>第二页返回上一页时，数据被清空了。</Text></DIV>
      <DIV>3）<Text delete>接收人 <KeyTag>Option </KeyTag>最好改成数组遍历的样式。</Text></DIV>
      <DIV>4）判断手机号和微信的联系方式时，自定义校验只是校验的手机号方式。</DIV>
    </DIV>
  return (
    <>
      <CustomBreadcrumb arr={['表单', '步骤表单 ']} />
      <UseIntroduce describe={describe} />
      <FormWrapper >
        <Steps current={current} style={{ margin: '20px auto', maxWidth: '65rem' }}>
          <Step title="填写表单" />
          <Step title="查看表单信息" />
          <Step title="完成" />
        </Steps>
        <Divider />
        {current === 0 && (
          <Step1Form />
        )}
        {current === 1 && (
          <Step2Form />
        )}
        {
          current === 2 && (
            <Step3Form />
          )
        }
      </FormWrapper>
    </>
  );
}

export default FormStepView;
