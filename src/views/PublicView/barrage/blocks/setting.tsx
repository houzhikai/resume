import { SettingOutlined } from '@ant-design/icons';
import type { SliderMarks } from 'antd/lib/slider';
import '../style/setting.scss'
import { Button, Radio, Slider, Tooltip } from 'antd';
interface Props {
  handleChangeBulletSpeed: (value: number) => void
  defaultSpeed: number
  times: number | string
  handleChangeLoopCount: (value: number | string) => void
  onSelectColor: (value: string)=>void
}
function Setting(props: Props) {
  const { defaultSpeed, handleChangeBulletSpeed, times, handleChangeLoopCount, onSelectColor } = props

  const handleChange = (value: number) => {
    handleChangeBulletSpeed(value)
  }
  const onChangeLoopCount = (e: any) => {
    handleChangeLoopCount(e.target.value)
  }
  const handleSelectColor = (value: string) => {
    onSelectColor(value)
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
  const colorList = [
    {id: 1, value: '#fff', label: 'white-content' },
    {id: 2, value: 'red', label: 'red-content'},
    {id: 3, value: 'green', label: 'green-content'},
    {id: 4, value: 'yellow', label: 'yellow-content'},
    {id: 5, value: 'black', label: 'black-content'},
  ]
    const content = (
      <div className='tooltip'>
        <div className='speed'>
          <div className='bulletLabel'>弹幕速度</div>
          <Slider marks={marks} defaultValue={defaultSpeed} onChange={handleChange} /></div>
        <div className='loopCount'>
          <div style={{marginBottom: 6}}>循环次数</div>
          <Radio.Group onChange={onChangeLoopCount} value={times}>
            <Radio className='loopLabel' value={1}>一次</Radio>
            <Radio className='loopLabel' value="infinite">无数次</Radio>
          </Radio.Group>
        </div>
        <div className='fontColor'>
          <div className='title'>字体颜色</div>
          <div className='content'>
            {
              colorList.map((item: any) => {
                return (
                <div
                  key={item.id}
                    className={item.label}
                  // @ts-ignore
                  onClick={()=>handleSelectColor(item.value)}
                  />
                )})
            }
          </div>
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
