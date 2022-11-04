import React from 'react';
import { Divider } from 'antd';
import CustomBreadcrumb from '../../../components/CustomBreadcrumb';
import { DescribeP, DIV, KeyTag, Space } from '../../../components/Div';
import UseIntroduce from '../../../components/UseIntroduce';
import ShowOrClose from './ShowOrClose';
import EllipsisMiddle from './EllipsisMiddle';
import DialogMessage from './DialogMessage';
import TextCarousel from './TextCarousel/index';
import TextUpDown from './TextUpDown';

const Typography: React.FC = () => {
  const describe = (
    <DescribeP>
      <DIV>1）要实现一个文字排版的效果</DIV>
      <DIV>2) 已经实现的功能：
        <DIV> 一、多行文字<KeyTag>展开/收起</KeyTag>的功能，antd 中只有<KeyTag>展开</KeyTag>功能，不支持<KeyTag>收起</KeyTag>
          <DIV> 1、label 展示文字，默认空字符串</DIV>
          <DIV> 2、rows 默认展示行数，默认 rows=2</DIV>
        </DIV>
        <DIV> 二、省略中间文字，用。。。代替。自定义添加了<KeyTag>3个api</KeyTag>
          <DIV>1、suffixCount：末尾留的字符长度，默认为12</DIV>
          <DIV>2、isShow：是否展示提示，默认为false</DIV>
          <DIV>3、label：文字内容，<KeyTag>必填</KeyTag></DIV>
        </DIV>
        <DIV>三、文字跑马灯，<KeyTag>鼠标浮上去文字暂停</KeyTag>
          <DIV>1、content: <KeyTag>内容，默认为空</KeyTag></DIV>
          <DIV>2、duration: <KeyTag>滚动持续时长，默认值为3</KeyTag></DIV>
        </DIV>
      </DIV>
    </DescribeP>
  )
  const content = 'Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team.'

  const adSpace = '我是一条广告，但是我是一直无限循环的'

  const dataList = [
    {
      id: '0',
      title: '我是广告一号',
    },
    {
      id: '2',
      title: '我是广告二号',
    },
    {
      id: '3',
      title: '我是广告三号',
    },
    {
      id: '4',
      title: '我是广告四号',
    },
    {
      id: '5',
      title: '我是广告五号',
    },
    {
      id: '6',
      title: '我是广告六号',
    }
  ];

  return (
    <>
      <CustomBreadcrumb arr={['通用', '文字排版']} />
      <UseIntroduce describe={describe} />

      <Divider plain>文字横向移动（跑马灯）</Divider>
      <TextCarousel content={adSpace} />

      <Divider plain>文字上下滚动</Divider>
      <TextUpDown list={dataList} />

      <Divider plain>展开/收起</Divider>
      <ShowOrClose label={content} rows={2} />

      <Divider plain>省略中间文字</Divider>
      <EllipsisMiddle suffixCount={5} label={content} />
      <Space />
      <EllipsisMiddle isShow suffixCount={24} label={content} />

      {/* 展开/收起 下面的对话框（回复） */}
      <Divider plain>展开/收起 下面的对话框（回复）</Divider>
      <DialogMessage />
    </>
  );
}

export default Typography;
