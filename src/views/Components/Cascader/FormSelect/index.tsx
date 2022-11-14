import { Form, Select } from 'antd'
import { dataList } from '../dataList'
import React, { useEffect, useState } from 'react';

const Option = Select


function FormSelect() {
  const [city, setCity] = useState<any>([])
  const [area, setArea] = useState<any>([])

  const [form] = Form.useForm();

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
      <Form style={{ display: 'flex' }} form={form}>
        <Form.Item name='province' label='省份' style={{ width: 250 }}>
          <Select allowClear optionFilterProp="children" placeholder='省份' onChange={handleGetCity} >
            {
              dataList.map(item =>
                <Option key={item.name} value={item.name}>{item.name}</Option>
              )
            }
          </Select>
        </Form.Item>
        <Form.Item name='city' label='城市' style={{ width: 250, margin: '0 20px' }}>
          <Select allowClear placeholder='城市' onChange={handleGetArea}>
            {
              city.map((item: { name: string }) =>
                <Option key={item.name} value={item.name}>{item.name}</Option>
              )
            }
          </Select>
        </Form.Item>
        <Form.Item name='area' label='地区' style={{ width: 250 }}>
          <Select allowClear placeholder='地区' >
            {
              area.map((item: string) =>
                <Option key={item} value={item}>{item}</Option>
              )
            }
          </Select>
        </Form.Item>
      </Form>
    </div>
  );
}

export default FormSelect;
