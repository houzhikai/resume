import React, { useEffect, useState } from 'react';
import CustomBreadcrumb from '../../components/BreadCrumbs';
import UseIntroduce from '../../components/UseIntroduce';
import { Space, Input } from 'antd';
import styled from 'styled-components';
import { DIV, KeyTag } from '../../components/Div'

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: white;
  padding: 20px;
`
const FormCalculate = () => {
  const [value1, setValue1] = useState()
  const [value2, setValue2] = useState()
  const [proportion1, setProportion1] = useState()
  const [proportion2, setProportion2] = useState()

  const handleChange1 = (e: any) => {
    // 只能保留两位小数
    const numberValue = (e.target.value).replace(/^(\-)*(\d+)\.(\d\d).*$/, "$1$2.$3");
    const reg = /^-?\d*(\.\d*)?$/;
    if ((!isNaN(numberValue) && reg.test(numberValue)) || numberValue === '') {
      setValue1(numberValue)
    }
  }
  const handleChange2 = (e: any) => {
    // 只能保留两位小数
    const numberValue = (e.target.value).replace(/^(\-)*(\d+)\.(\d\d).*$/, "$1$2.$3");
    const reg = /^-?\d*(\.\d*)?$/;
    if ((!isNaN(numberValue) && reg.test(numberValue)) || numberValue === '') {
      setValue2(numberValue)
    }
  }
  useEffect(() => {
    if (!(value1 || value2)) {
      const proportion1: any = '';
      setProportion1(proportion1)
      const proportion2: any = '';
      setProportion2(proportion2)
    } else if (value1 && !value2) {
      const proportion1: any = 100;
      setProportion1(proportion1)
      const proportion2: any = '';
      setProportion2(proportion2)
    } else if (value2 && !value1) {
      const proportion1: any = '';
      setProportion1(proportion1)
      const proportion2: any = 100;
      setProportion2(proportion2)
    } else if (value1 && value2) {
      const value = Number(value1) + Number(value2);
      const proportion1: any = (value1 / value * 100).toFixed(2)
      setProportion1(proportion1)
      const proportion2: any = (value2 / value * 100).toFixed(2)
      setProportion2(proportion2)
    }
  }, [value1, value2])

  const describe =
    <DIV>
      <DIV>
        1） InputNumber 组件<KeyTag>不能</KeyTag>满足后缀加文字的需求，所以只能使用为 INput 组件，<KeyTag>手动对 value 进行设置。</KeyTag>
      </DIV>
      <DIV>
        2）其中根据实际情况，捐款金额不能出现 负号 的情况，所以把 负号 也做了删除处理。最大数字为10位。
      </DIV>
      <DIV>
        3）当改变 Input 框数字时，后面的所占比例将是可以随时改变的，所以就需要用到<KeyTag> useEffect </KeyTag>，计算他们的比例，所占比例不需要过多操作，所以将它置灰。
      </DIV>
      <DIV>
        4）<KeyTag>问题：</KeyTag> 校验只能输入数字有问题，原因不明。
      </DIV>
    </DIV>
  return (
    <>
      <CustomBreadcrumb arr={['表单', '自动计算百分比 ']} />
      <UseIntroduce describe={describe} />
      <FormWrapper>
        <Space style={{ marginBottom: 10 }}>
          小明捐款： <Input addonAfter="万元" maxLength={10} value={value1} onChange={handleChange1} />
          所占比例： <Input addonAfter="%" disabled value={proportion1} />
        </Space>
        <Space>
          小红捐款：<Input addonAfter="万元" maxLength={10} value={value2} onChange={handleChange2} />
          所占比例：<Input addonAfter="%" disabled value={proportion2} />
        </Space>
      </FormWrapper>
    </>
  );
}

export default FormCalculate;
