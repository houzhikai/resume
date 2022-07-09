import React from 'react';
import { SettingOutlined } from '@ant-design/icons';
import type { SliderMarks } from 'antd/lib/slider';
import '../style/setting.scss'
import { Radio, Slider, Tooltip } from 'antd';
interface Props {
  handleChangeBulletSpeed: (value: number) => void
  defaultSpeed: number
  times: number | string
  handleChangeLoopCount: (value: number | string) => void
}
function Setting(props: Props) {
  const { defaultSpeed, handleChangeBulletSpeed, times, handleChangeLoopCount } = props

  const handleChange = (value: number) => {
    handleChangeBulletSpeed(value)
  }
  const onChangeLoopCount = (e: any) => {
    handleChangeLoopCount(e.target.value)
  }
  const marks: SliderMarks = {
    10: 60,
    50: 70,
    70: 80,
    80: 90,
    100: {
      style: {
        color: '#fff',
      },
      label: <strong>最快</strong>,
    },
  };
  const content =(
    <div  className='tooltip'>
      <div className='speed'>
        <div className='bulletLabel'>弹幕速度</div>
        <Slider marks={marks} defaultValue={defaultSpeed} onChange={handleChange} />
      </div>
      <div className='loopCount'>
        <div>循环次数</div> 
        <Radio.Group  onChange={onChangeLoopCount} value={times}>
          <Radio className='loopLabel' value={1}>一次</Radio>
          <Radio className='loopLabel' value="infinite">无数次</Radio>
        </Radio.Group>
      </div>
    </div>
  );

  return (
    <div className='wrapper'>
      <Tooltip trigger='click' placement="top" title={content} overlayStyle={{minWidth: 500}} >
         <SettingOutlined className='icon' /> 
        </Tooltip>
    </div>
  );
}

export default Setting;
