import React from 'react';
import { Image } from 'antd';
import CustomBreadcrumb from "../../../components/CustomBreadcrumb";
import { FormWrapper } from '../../../components/Div';
import UseIntroduce from "../../../components/UseIntroduce";
import './TransformRotate.scss'

function TransformRotate() {

  const describe = <div>
    无
  </div>
  return (
    <>
      <CustomBreadcrumb arr={['动画', '旋转']} />
      <UseIntroduce describe={describe} />
      <FormWrapper>
        <div className="box">
          <Image width={400} height={300}
            src="https://img.syt5.com/2021/0813/20210813050817635.jpg"
          />
          <div className='txt'>
            <p className='title'>我是题目</p>
            <p className='content'>这是一条很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长的文字</p>
          </div>
        </div>
      </FormWrapper>
    </>
  );
}

export default TransformRotate;
