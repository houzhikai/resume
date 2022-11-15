import { Typography } from 'antd';
import CustomBreadcrumb from '../../../components/CustomBreadcrumb';
import { DescribeP, DIV, KeyTag } from '../../../components/Div';
import IconFont from '../../../components/IconFont';
import UseIntroduce from '../../../components/UseIntroduce';
import Select1 from './blocks/Select1';
import Select2 from './blocks/Select2';
import Select3 from './blocks/Select3';


const SelectDisable = () => {
  const describe = <div>
    <DescribeP>基于 antd组件 <Typography.Link href='https://ant.design/components/select-cn/' target="_blank"><KeyTag>Select<IconFont type="icon-sousuo" /></KeyTag></Typography.Link> 组件的二次开发，添加新的功能：</DescribeP>
    <DIV>1）新增<KeyTag>选中后自动置灰</KeyTag>的功能，支持多选目的是不能多次点击相同的option</DIV>
    <DIV>2）maxTagCount: 最多展示 <KeyTag>tags</KeyTag>个数，默认不存在</DIV>
    <DIV>3）isAllowClear: 是否展示 <KeyTag>清空按钮</KeyTag>，默认不展示</DIV>
    <DIV>4）默认<KeyTag>width: 300</KeyTag>，类型为数字（number）</DIV>

  </div>;
  return (
    <>
      <CustomBreadcrumb arr={['组件库', '选择后置灰']} />
      <UseIntroduce describe={describe} />
      {/* 多选后置灰 */}
      <Select1 />
      {/* 选中后合并为一段文字 */}
      <Select2 />
      {/* 默认不可删，选择的可以删除 */}
      <Select3 />
    </>
  );
}

export default SelectDisable;
