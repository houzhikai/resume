import { Cascader } from 'antd';
import React from 'react';


interface Option {
  value: string | number;
  label: string;
  children?: Option[];
}
function CascaderSelect() {

  const options: Option[] = [
    {
      value: 'zhejiang',
      label: 'Zhejiang',
      children: [
        {
          value: 'hangzhou',
          label: 'Hangzhou',
          children: [
            {
              value: 'xihu',
              label: 'West Lake',
            },
          ],
        },
      ],
    },
    {
      value: 'jiangsu',
      label: 'Jiangsu',
      children: [
        {
          value: 'nanjing',
          label: 'Nanjing',
          children: [
            {
              value: 'zhonghuamen',
              label: 'Zhong Hua Men',
            },
          ],
        },
      ],
    },
  ];


  return (
    <Cascader
      style={{ width: 300 }}
      clearIcon
      options={options}
      placeholder="请选择"
      displayRender={label => label.join('  ')} />
  );
}

export default CascaderSelect;
