import React from 'react';
import { Image } from 'antd';
import CustomBreadcrumb from "../../../components/CustomBreadcrumb";
import { FormWrapper } from '../../../components/Div';
import UseIntroduce from "../../../components/UseIntroduce";
import './TransformZoom.scss'

function TransformZoom() {
  const describe = <div style={{ textAlign: 'center', color: 'red', fontSize: '20px' }}>
    缩放动画
  </div >
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

export default TransformZoom;
