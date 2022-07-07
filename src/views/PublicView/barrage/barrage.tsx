import React, { useEffect, useState } from 'react';
import BulletScreen, { StyledBullet } from './components/index';
import './style/barrage.scss'
import CustomBreadcrumb from '../../../components/CustomBreadcrumb';
import { DescribeP, DIV, KeyTag } from '../../../components/Div';
import UseIntroduce from '../../../components/UseIntroduce';
import DropdownButton from './blocks/dropdown';

const headUrl = 'https://img.win3000.com/m00/64/3c/46d9f60ef87732950100c11587ac4421_c_345_458.jpg';
function Barrage() {
  // 弹幕屏幕
  const [screen, setScreen] = useState<any>(null);
  // 弹幕内容
  const [bullet, setBullet] = useState('');
  // 选择仅内容还是用户
  const [selectType, setSelectType] = useState('用户')
  useEffect(() => {
    // 给页面中某个元素初始化弹幕屏幕，一般为一个大区块。此处的配置项全局生效
    //  duration 滚动时长，数值越小滚动越快
    let value = new BulletScreen('.screen', { duration: 10 });
    setScreen(value);
  }, []);
  // 弹幕内容输入事件处理
  const handleChange = ({target:{ value }}:any) => {
    setBullet(value);
  };
  // 发送弹幕
  const handleSend = () => {
    if (bullet) {
      if (screen === null) {
        return;
      }
      if (selectType === '仅内容') {
       screen.push(<div className='bulletWord'>{ bullet }</div>);
       setBullet('')
      } else if (selectType === '用户') {
              // 用户 使用 StyleBullet                                                 弹幕文字颜色
        screen?.push(<StyledBullet head={headUrl} msg={bullet} size='normal' color="#000" />);
        setBullet('')
      }
    }
  };
  const getChildCount = (value: any) => {
    setSelectType(value)
  }
  const describe = <div>
    <DescribeP>
      <DIV>1）暂无内容，将要写一个弹幕效果</DIV>
      <DIV>2) 将要实现的功能： <KeyTag>选择 用户或者 仅内容，展示不同的弹幕类型</KeyTag></DIV>
    </DescribeP>
  </div>;
  return (
    <>
      <CustomBreadcrumb arr={['通用', '弹幕']} />
      <UseIntroduce describe={describe} />
      <main>
        <div className="screen" style={{ width: '100%', overflowX: 'hidden', height: '360px' }}></div>
        <div className='workStation'>
          <div>
            <input placeholder='请文明发言...' value={bullet} onChange={handleChange} />
            <button className='send' onClick={handleSend} >发送</button>
          </div>
          <DropdownButton getCount={getChildCount} />
        </div>
      </main>
    </>
  );
}
export default Barrage;
