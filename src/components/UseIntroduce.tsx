import React from 'react';
import { Divider } from 'antd'

const UseIntroduce = (props: { describe: any }) => {
  return (
    <div className='base-style'>
      <h3>如何使用</h3>
      <Divider />
      <p>{props.describe}</p>
    </div>
  );
}

export default UseIntroduce;
