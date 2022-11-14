import { Typography } from 'antd';
import CustomBreadcrumb from '../../../components/CustomBreadcrumb';
import { DescribeP, DIV, KeyTag } from '../../../components/Div';
import IconFont from '../../../components/IconFont';
import UseIntroduce from '../../../components/UseIntroduce';
import Select1 from './blocks/Select1';


const SelectDisable = () => {
  const describe = <div>
    <DescribeP>基于 antd组件 <Typography.Link href='https://ant.design/components/select-cn/' target="_blank"><KeyTag>Select<IconFont type="icon-sousuo" /></KeyTag></Typography.Link> 组件的二次开发，添加新的功能：</DescribeP>
    <DIV>1）新增<KeyTag>选中后自动置灰</KeyTag>的功能，支持多选目的是不能多次点击相同的option</DIV>

  </div>;
  return (
    <>
      <CustomBreadcrumb arr={['组件库', '选择后置灰']} />
      <UseIntroduce describe={describe} />
      {/* 单选 */}
      <Select1 />
    </>
  );
}

export default SelectDisable;
