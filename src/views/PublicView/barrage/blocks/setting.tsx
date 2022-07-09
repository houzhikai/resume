import React, { useState } from 'react';
import { SettingOutlined } from '@ant-design/icons';
import type { SliderMarks } from 'antd/lib/slider';
import '../style/setting.scss'
import { Slider, Tooltip } from 'antd';

interface Props {
  handleChangeBulletSpeed: (value: number) => void
  defaultSpeed:number
}
function Setting(props: Props) {
  const { defaultSpeed, handleChangeBulletSpeed} = props
  // const [, ] = useState<number>(10)
  const handleChange = (value: number) => {
    // setBulletSpeed(value)
    handleChangeBulletSpeed(value)
  }
  const marks: SliderMarks = {
    10: 10,
    50: 50,
    70: 70,
    80:80,
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
      {/* <p>Content</p> */}
    </div>
  );

  return (
    <div className='wrapper'>
      <Tooltip placement="top" title={content} overlayStyle={{minWidth: 500}} >
        <SettingOutlined className='icon' />
        </Tooltip>
    </div>
  );
}

export default Setting;
