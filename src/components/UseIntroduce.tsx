import React from 'react';
import { Divider } from 'antd'

const UseIntroduce = (props: { describe: any }) => {
  return (
    <div className='base-style'>
      <h3>如何使用 / 使用笔记</h3>
      <Divider />
      <div>{props.describe}</div>
    </div>
  );
}

export default UseIntroduce;
