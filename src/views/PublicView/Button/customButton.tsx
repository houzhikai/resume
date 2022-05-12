import React from 'react';
import { Form } from 'antd';
import { FormWrapper } from '../../../components/Div';
import MyCopy from '../../../components/myCopy';

function CustomButton() {
  return (
    <FormWrapper>
      <Form.Item label="复制组件">
        <MyCopy label="这是我复制的内容" />1111111111111111111
      </Form.Item>
    </FormWrapper>
  );
}

export default CustomButton;
