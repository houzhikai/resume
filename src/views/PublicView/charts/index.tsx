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
      <DIV>2) 还有如下问题：
        ①<KeyTag>echarts宽度需要各个设备适配</KeyTag>
        ②<KeyTag>可以找几个更适合的数据展示</KeyTag>
        ③<KeyTag>在适配不同屏幕时重新刷新数据，自动适配</KeyTag>
      </DIV>
    </DescribeP>
  </div>;
  return (
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
