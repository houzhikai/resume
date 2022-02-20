import React from 'react';
import UseIntroduce from '../../components/UseIntroduce';
import CustomBreadcrumb from '../../components/BreadCrumbs'
import { Divider } from 'antd';
import styled from 'styled-components';
const DIV = styled.div`
  margin-bottom: 20px;
`

const Home = () => {
  const describe =
    <>
      <DIV>
        该平台搭建的目的主要是将平时用到的常见的问题及<span style={{ color: '#f60' }}>小例子</span>以每个页面展示出来，现在只能复原其功能，还不能将代码直接拷贝到页面上，主要是巩固自己学习的知识，记录自己的点点滴滴。
      </DIV>
      <DIV>1）该平台暂时仅供个人使用。</DIV>
      <DIV>2）有趣的知识也可以将链接放在该平台供大家参考。</DIV>
      <DIV>3）当然该平台有很多问题也可以指正。</DIV>
    </>
  return (
    <>
      <CustomBreadcrumb arr={['我的首页']} />
      <UseIntroduce describe={describe} />
      <div className='base-style'>
        <h3>暂时完成的组件为</h3>
        <Divider />
        <DIV>
          <CustomBreadcrumb arr={['通用', '按钮']} />
          <CustomBreadcrumb arr={['表单', 'FORM切换']} />
        </DIV>
    </div>
    </>
  );
}

export default Home;
