import React from 'react';
import { Form } from 'antd';
import { DescribeP, FormWrapper, KeyTag } from '../../../components/Div';
import MyCopy from '../../../components/myCopy';
import CustomBreadcrumb from '../../../components/CustomBreadcrumb';
import UseIntroduce from '../../../components/UseIntroduce';

function CustomButton() {
  const describe = <div>
    <DescribeP>1）这是一个基于<KeyTag>ClipboardJS</KeyTag>的一个复制组件，操作非常简单，只需要点击文本即可快速复制。</DescribeP>
    <DescribeP>2）浮在需要复制的文本上，右上角会出现<KeyTag>复制</KeyTag>字样，点击文本后会有复制成功的字样出现，表示已经复制成功了。</DescribeP>
    <DescribeP>3）同时添加了文本过长展示...的效果。</DescribeP>
    <DescribeP>4）可以通过 <KeyTag>isShow=true/false</KeyTag>来控制要不要展示提示框。</DescribeP>
    <DescribeP>5）现在存在的问题，<KeyTag>1.</KeyTag>当页面有多个复制组件时，复制成功会有多个同时出现。<KeyTag>2.</KeyTag>尽量找到一个可以替代复制字样的icon。</DescribeP>
  </div>;
  return (
    <>
      <CustomBreadcrumb arr={['表单', '复制']} />
      <UseIntroduce describe={describe} />
      <FormWrapper>
        <Form.Item label="复制组件">
          <MyCopy isShow={false} label="这是我复制的内容" />
        </Form.Item>
        <Form.Item label="复制组件1">
          <MyCopy isShow={false} label="内容" />
        </Form.Item>
        <Form.Item label="复制组件2">
          <MyCopy isShow label="这是我复制的内容" />
        </Form.Item>
      </FormWrapper>
    </>

  );
}

export default CustomButton;
