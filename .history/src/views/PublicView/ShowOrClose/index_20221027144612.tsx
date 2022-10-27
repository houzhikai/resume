import React, { FC, useState } from 'react';
import { Typography } from 'antd';
import CustomBreadcrumb from '../../../components/CustomBreadcrumb';
import { DescribeP, DIV, KeyTag } from '../../../components/Div';
import UseIntroduce from '../../../components/UseIntroduce';
const { Paragraph } = Typography;
interface Props {
  text: string,
  rows?: number
}

const ShowOrClose: React.FC<Props> = ({ text, rows = 2 }) => {
  const [ellipsis, setEllipsis] = useState<boolean>(true);  //是否自动溢出
  const [isShow, setIsShow] = useState<boolean>(false);  //是否展开

  const describe = (
    <DescribeP>
      {/* <DIV><a>https://codepen.io/lilyH/pen/RwMLLO </a> css 实现上下滚动效果</DIV> */}
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
      <div style={{ position: 'relative' }}>
        <Paragraph
          ellipsis={isShow ? false : {
            rows: rows,
            expandable: true,
            symbol: <Typography.Link style={{ visibility: 'hidden' }}>展开</Typography.Link>
          }
          }
        >
          Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
          Design, a design language for background applications, is refined by Ant UED Team. Ant
          Design, a design language for background applications, is refined by Ant UED Team. Ant
          Design, a design language for background applications, is refined by Ant UED Team. Ant
          Design, a design language for background applications, is refined by Ant UED Team. Ant
          Design, a design language for background applications, is refined by Ant UED Team.
          {isShow && <Typography.Link onClick={() => setIsShow(false)}>收起</Typography.Link>}
        </Paragraph>
        {!isShow && (
          <div style={{ position: 'absolute', bottom: 0, right: 0 }}>
            <Typography.Link onClick={() => setIsShow(true)}>展开</Typography.Link>
          </div>
        )}
      </div>
    </>
  );
}

export default ShowOrClose;
