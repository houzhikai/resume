import React from 'react';
import CustomBreadcrumb from '../../../components/CustomBreadcrumb';
import { DescribeP, DIV, KeyTag } from '../../../components/Div';
import UseIntroduce from '../../../components/UseIntroduce';

function Interactive() {
  
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
      <CustomBreadcrumb arr={['通用', '互动']} />
      <UseIntroduce describe={describe} />
      <div>
        111
      </div>
    </>
  );
}

export default Interactive;
