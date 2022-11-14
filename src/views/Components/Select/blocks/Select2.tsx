import { Divider, Select } from 'antd';
import React, { useState } from 'react';
import type { SelectProps } from 'antd';
import { dataList } from '../dataList';



interface Select2Props {
  width?: number
  maxTagCount?: number
}
const Select2 = (props: Select2Props) => {
  const { width, maxTagCount } = props
  const [value, setValue] = useState<any>([])
  const selectProps: SelectProps = {
    mode: 'multiple',
    style: { width: width || 300 },
    value,
    allowClear: true,
    options: dataList,
    onChange: (newValue: string[]) => {
      setValue(newValue);
    },
    showArrow: true,
    placeholder: '请选择',
    maxTagCount: maxTagCount || 1,
    maxTagPlaceholder: (c) => <>{`+${c.length}`}</>
  };
  return (
    <>
      <Divider plain>选择后不置灰(选中后合并为一段文字)</Divider>
      <span>select2:   </span>
      <Select {...selectProps} />
    </>
  );
}

export default Select2;
