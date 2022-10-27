import React from 'react';
import { Divider } from 'antd';
import CustomBreadcrumb from '../../../components/CustomBreadcrumb';
import { DescribeP, DIV, KeyTag } from '../../../components/Div';
import UseIntroduce from '../../../components/UseIntroduce';
import ShowOrClose from './ShowOrClose';
import EllipsisMiddle from './EllipsisMiddle';

const Typography: React.FC = () => {
  const describe = (
    <DescribeP>
      <DIV>1）要实现一个文字排版的效果</DIV>
      <DIV>2) 已经实现的功能：
        ①多行文字<KeyTag>展开/收起</KeyTag>的功能，antd 中只有<KeyTag>展开</KeyTag>功能，不支持<KeyTag>收起</KeyTag>
        ②<KeyTag>中间文字省略，用。。。代替</KeyTag>
      </DIV>
    </DescribeP>
  )

  return (
    <>
      <CustomBreadcrumb arr={['通用', '文字排版']} />
      <UseIntroduce describe={describe} />

      <Divider plain>展开/收起</Divider>
      <ShowOrClose />

      <Divider plain>省略中间文字</Divider>
      <EllipsisMiddle suffixCount={5} label='Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team.' />
    </>
  );
}

export default Typography;
