import React from 'react';
import CustomBreadcrumb from '../../components/BreadCrumbs';
import UseIntroduce from '../../components/UseIntroduce';

function AboutUs() {
  return (
    <>
      <CustomBreadcrumb arr={['关于我们']} />
      <UseIntroduce describe='没有更多的介绍，敬请期待以后的更新。。。。。。。。' />
    </>
  );
}

export default AboutUs;
