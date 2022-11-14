import { Divider, Select } from 'antd';
import React from 'react';
import { dataList } from '../dataList'

interface SelectProps {
  width?: number,
  maxTagCount?: number,
  isAllowClear?: boolean,
}
interface newListProps {
  value: string,
  label: string,
  disabled?: boolean
}
const Select1 = (props: SelectProps) => {
  const { width, maxTagCount, isAllowClear } = props
  let newList: newListProps[] = []
  const _dataList = JSON.parse(JSON.stringify(dataList))
  // 选择
  const handleChange = (value: string[]) => {
    _dataList.map((item: newListProps) => {
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
      return newList = []
    })
  }
  return (
    <>
      <Divider plain>多选后置灰(多选)</Divider>
      <span>select1:   </span>
      <Select
        mode='multiple'
        style={{ width: width || 300 }}
        placeholder='请选择'
        allowClear={isAllowClear ? true : false}
        options={_dataList}
        showSearch
        showArrow={true}
        onChange={handleChange}
        onClear={handleClear}
        maxTagCount={maxTagCount ?? undefined}
        maxTagPlaceholder={c => <>{`+${c.length}`}</>}
      />
    </>
  );
}

export default Select1;
