import React from 'react';
import UseIntroduce from '../../components/UseIntroduce';
import CustomBreadcrumb from '../../components/CustomBreadcrumb';
import { Divider, Typography } from 'antd';
import IconFont from '../../components/IconFont';
import { DIV, KeyTag } from '../../components/Div';

const Home = () => {
  const describe =
    <>
      <DIV>
        该平台基于<Typography.Link href='https://ant.design/components/overview-cn/' target="_blank"><KeyTag>antd组件<IconFont type="icon-sousuo" /></KeyTag></Typography.Link>，搭建的目的主要是将平时用到的常见的问题及<KeyTag>小例子</KeyTag>以每个页面展示出来，现在只能复原其功能，还不能将代码直接拷贝到页面上，主要是巩固自己学习的知识，记录自己的点点滴滴。
      </DIV>
      <DIV>1）该平台暂时仅供个人使用。有趣的知识也可以将链接放在该平台供大家参考。当然该平台有很多问题也可以指正。</DIV>
      <DIV>2）每页都记录了当时的操作和心得，包括组件的使用规则，以备以后方便查看。</DIV>
    </>;
  return (
    <>
      <CustomBreadcrumb arr={['我的首页']} />
      <UseIntroduce describe={describe} />
      <div className='base-style'>
        <h3>暂时完成的组件为</h3>
        <Divider />
        <DIV>
          <CustomBreadcrumb arr={['通用', '按钮']} />
          <CustomBreadcrumb arr={['通用', '复制']} />
          <CustomBreadcrumb arr={['表单', 'FORM切换']} />
          <CustomBreadcrumb arr={['表单', '动态增减嵌套字段']} />
          <CustomBreadcrumb arr={['表单', '自动计算百分比']} />
          <CustomBreadcrumb arr={['表单', '步骤表单']} />
          <CustomBreadcrumb arr={['关于我们']} />
        </DIV>
      </div>
    </>
  );
};

export default Home;
