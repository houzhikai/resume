import { Divider } from 'antd';
import CascaderSelect from './CascaderSelect';
import FormSelect from './FormSelect';
import ThreeSelect from './ThreeSelect';

const Cascader = () => {
  return (
    <>
      <Divider plain><h1>次级选择</h1></Divider>
      <ThreeSelect />

      <Divider plain><h1>Form 表单</h1></Divider>
      <FormSelect />

      <Divider plain><h1>级联选择</h1></Divider>
      <CascaderSelect />
    </>
  );
}

export default Cascader;
