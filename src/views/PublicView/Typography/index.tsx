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
        <DIV> 1、多行文字<KeyTag>展开/收起</KeyTag>的功能，antd 中只有<KeyTag>展开</KeyTag>功能，不支持<KeyTag>收起</KeyTag> </DIV>
        <DIV> 2、省略中间文字，用。。。代替。自定义添加了<KeyTag>3个api</KeyTag> </DIV>
        <DIV>suffixCount：末尾留的字符长度，默认为12</DIV>
        <DIV>isShow：是否展示提示，默认为false</DIV>
        <DIV>label：文字内容，<KeyTag>必填</KeyTag></DIV>
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
      <br />
      <br />
      <EllipsisMiddle isShow suffixCount={24} label='Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team.' />
    </>
  );
}

export default Typography;
