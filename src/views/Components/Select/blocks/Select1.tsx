import { Divider, Select } from 'antd';
import { dataList } from '../dataList'

interface SelectProps {
  width?: number
}
interface newListProps {
  value: string,
  label: string,
  disabled?: boolean
}
const Select1 = (props: SelectProps) => {
  const { width } = props
  let newList: newListProps[] = []
  // 选择 options
  const handleChange = (value: string[]) => {
    dataList.map((item: any) => {
      value.map(p => {
        if (item.value === p) {
          newList.push(item)
        }
        return newList.map(item => item.disabled = true)
      })
      return newList
    })
  }
  // 点击 清除 按钮
  const handleClear = () => {
    newList.map(item => {
      if (item.disabled) {
        item.disabled = false
      }
      return newList
    })
  }
  return (
    <>
      <Divider plain>多选</Divider>
      <span>select1:   </span>
      <Select
        mode='multiple'
        style={{ width: width || 300 }}
        placeholder='请选择'
        allowClear
        options={dataList}
        showSearch
        showArrow={true}
        onChange={handleChange}
        onClear={handleClear}
      />
    </>
  );
}

export default Select1;
