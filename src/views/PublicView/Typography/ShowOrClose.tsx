import React, { useState } from 'react';
import { Typography } from 'antd';

const { Paragraph } = Typography;

const ShowOrClose = (props: { label?: any, rows?: number }) => {
  const { label, rows } = props
  const [visible, setVisible] = useState<boolean>(false);  //是否展开

  return (
    <div>
      {/* https://github.com/ant-design/ant-design/issues/20639 */}
      <Paragraph
        ellipsis={
          visible ? false
            : {
              rows: rows || 2, // rows 的值要 +1 才对，比如 rows = 3，展示2行
              expandable: true,
              symbol: <span onClick={(e) => {
                e.stopPropagation(); //防止当前事件在捕获和冒泡阶段的进一步传播,但不会阻止任何默认行为的发生
                setVisible(true)
              }}>展开</span>
            }
        }
      >
        {label ?? ''}
        {visible && <Typography.Link onClick={() => setVisible(false)}> 收起</Typography.Link>}
      </Paragraph>
    </div>
  );
}

export default ShowOrClose;
