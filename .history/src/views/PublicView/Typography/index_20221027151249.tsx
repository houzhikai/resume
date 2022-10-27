import React, { useState } from 'react';
import { Divider, Typography } from 'antd';
import CustomBreadcrumb from '../../../components/CustomBreadcrumb';
import { DescribeP, DIV, KeyTag } from '../../../components/Div';
import UseIntroduce from '../../../components/UseIntroduce';
const { Paragraph } = Typography;
interface Props {
  rows: number
}

const ShowOrClose: React.FC<Props> = ({ rows = 3 }) => {
  const [visible, setVisible] = useState<boolean>(false);  //是否展开

  const describe = (
    <DescribeP>
      <DIV>1）暂无内容，将要写一个从上到下弹幕互动的效果</DIV>
      <DIV>2) 将要实现的功能：
        ①<KeyTag>选择 用户或者 仅内容，展示不同的弹幕类型</KeyTag>
        ②<KeyTag>关闭弹幕开关， 没有关闭弹幕</KeyTag>
      </DIV>
    </DescribeP>
  )


  return (
    <>
      <CustomBreadcrumb arr={['通用', '展开/收起']} />
      <UseIntroduce describe={describe} />
      {/* https://github.com/ant-design/ant-design/issues/20639 */}
      <Divider plain>展开/收起</Divider>
      <div>
        <Paragraph
          ellipsis={
            visible ? false
              : {
                rows: rows, // rows 的值要 +1 才对，比如 rows = 3，展示2行
                expandable: true,
                symbol: <span onClick={(e) => {
                  e.stopPropagation(); //防止当前事件在捕获和冒泡阶段的进一步传播,但不会阻止任何默认行为的发生
                  setVisible(true)
                }}>展开</span>
              }
          }
        >
          Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
          Design, a design language for background applications, is refined by Ant UED Team. Ant
          Design, a design language for background applications, is refined by Ant UED Team. Ant
          Design, a design language for background applications, is refined by Ant UED Team. Ant
          Design, a design language for background applications, is refined by Ant UED Team. Ant
          Design, a design language for background applications, is refined by Ant UED Team.
          {visible && <Typography.Link onClick={() => setVisible(false)}> 收起</Typography.Link>}
        </Paragraph>
      </div>
    </>
  );
}

export default ShowOrClose;
