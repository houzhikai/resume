import React from 'react';
import CustomBreadcrumb from '../../../components/BreadCrumbs';
import UseIntroduce from '../../../components/UseIntroduce';
import { KeyTag } from '../../../components/Div';

import styled from 'styled-components';

const Upload = () => {
  const DescribeP = styled.p`
  margin-bottom: 10px;
`;
  const describe = <div>
    <DescribeP>1）暂无内容，将要写一个上传组件，实现上传图片，并且可以拿到一个其地址，达到一个<KeyTag>修改头像</KeyTag>的效果。</DescribeP>

  </div>;
  return (
    <>
      <CustomBreadcrumb arr={['表单', '上传']} />
      <UseIntroduce describe={describe} />
    </>
  );
};

export default Upload;
