import { Select } from 'antd';
import React, { useState } from 'react';
import { dataList } from '../dataList';
const Option = Select
function ThreeSelect() {
  const [city, setCity] = useState<any>([])
  const [area, setArea] = useState<any>([])

  const handleGetCity = (value: any) => {
    let cityList: any[] = []
    dataList.map(item => {
      if (item.name === value) {
        cityList = item.cityList
      }
      return cityList
    })
    setCity(cityList)
  }
  const handleGetArea = (value: string) => {
    let areaList: any[] = []
    city.map((item: any) => {
      if (item.name === value) {
        areaList = item.areaList
      }
      return areaList
    })
    setArea(areaList)
  }
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div>省份：</div>
        <Select allowClear optionFilterProp="children" style={{ width: 200, margin: '0 10px' }} placeholder='省份' onChange={handleGetCity} >
          {
            dataList.map(item =>
              <Option key={item.name} value={item.name}>{item.name}</Option>
            )
          }
        </Select>
        <div>城市：</div>
        <Select allowClear style={{ width: 200, margin: '0 20px' }} placeholder='城市' onChange={handleGetArea}>
          {
            city.map((item: { name: string }) =>
              <Option key={item.name} value={item.name}>{item.name}</Option>
            )
          }
        </Select>
        <div>地区：</div>
        <Select allowClear style={{ width: 200 }} placeholder='地区' >
          {
            area.map((item: string) =>
              <Option key={item} value={item}>{item}</Option>
            )
          }
        </Select>
      </div>
    </div>
  );
}

export default ThreeSelect;
