import React from 'react';
import { Collapse } from 'antd'
const { Panel } = Collapse;


const UseIntroduce = (props: { describe: any }) => {
  return (
    <Collapse
      bordered={false}
      defaultActiveKey={['1']}
      expandIconPosition='right'
      className="site-collapse-custom-collapse"
    >
      <Panel header={<h3>如何使用 / 使用笔记</h3>} key="1" className='base-style'>
        <div>{props.describe}</div>
      </Panel>

    </Collapse>

  );
}

export default UseIntroduce;
