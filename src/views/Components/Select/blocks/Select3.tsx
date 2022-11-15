import { Divider, Select } from 'antd';
import { dataList } from '../dataList';

interface SelectProps {
  width?: number,
  isAllowClear?: boolean,
  maxTagCount?: number
}
// 默认的不可删除
const Select3 = (props: SelectProps) => {
  const { width, maxTagCount } = props
  const _dataList = JSON.parse(JSON.stringify(dataList))

  const defaultShow = () => {
    const defaultValue = _dataList.slice(1, 3) // 下标包括1不包括3
    return defaultValue
  }
  _dataList.slice(1, 3).map((item: any) => Object.assign(item, { disabled: true }))

  return (
    <>
      <Divider plain>默认不可删，选择的可以删除</Divider>
      <span>select3:   </span>
      <Select
        mode='multiple'
        style={{ width: width || 300 }}
        placeholder='请选择'
        options={_dataList}
        showSearch
        defaultValue={defaultShow}
        showArrow={true}
        maxTagCount={maxTagCount ?? undefined}
        maxTagPlaceholder={c => <>{`+${c.length}`}</>}
      />
    </>
  );
}

export default Select3;
