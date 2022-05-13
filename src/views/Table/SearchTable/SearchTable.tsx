import React from 'react';
// import { Table } from 'antd';
import CustomBreadcrumb from '../../../components/CustomBreadcrumb';
import UseIntroduce from '../../../components/UseIntroduce';
import { DIV, FormWrapper } from '../../../components/Div';
import { KeyTag } from '../../../components/Div';


const SearchTable = () => {

  const describe = <DIV>
    <DIV>
      想要固定左右栏时，在 columns 中设置<KeyTag>fixed 和 width</KeyTag> ，且最重要的是在组件中设置<KeyTag> scroll 的x，y 长度 </KeyTag>
    </DIV>
    <DIV>Pagination 属性改变分页器的位置，pagination 中的<KeyTag> defaultPageSize </KeyTag>属性可以改变每页的数据个数 </DIV>
  </DIV>;
  return (
    <>
      <CustomBreadcrumb arr={['表格', '最基本的表格']} />
      <UseIntroduce describe={describe} />
      <FormWrapper>
        222
      </FormWrapper>
    </>
  );
};

export default SearchTable;
