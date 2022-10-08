import React from 'react';
import CustomBreadcrumb from '../../../components/CustomBreadcrumb';
import { DescribeP, DIV, KeyTag } from '../../../components/Div';
import UseIntroduce from '../../../components/UseIntroduce';
import Echarts from './components/echarts';
import Header from './components/header';

const Charts = () => {
  const describe = <div>
    <DescribeP>
      <DIV>1）暂无内容，写Echarts页面组件</DIV>
      <DIV>2) 将要实现的功能：
        {/* ①<KeyTag>选择 用户或者 仅内容，展示不同的弹幕类型</KeyTag>
        ②<KeyTag>关闭弹幕开关， 没有关闭弹幕</KeyTag> */}
      </DIV>
    </DescribeP>
  </div>; return (
    <div>
      <h1>Echarts图表</h1>
      <CustomBreadcrumb arr={['通用', '图表']} />
      <UseIntroduce describe={describe} />
      <Header />
      <Echarts />
    </div>
  );
}

export default Charts;
