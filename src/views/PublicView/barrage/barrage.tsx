import React, { useEffect, useState } from 'react';
import BulletScreen, { StyledBullet } from './components/index';
import './components/index.scss'
import CustomBreadcrumb from '../../../components/CustomBreadcrumb';
import { DescribeP } from '../../../components/Div';
import UseIntroduce from '../../../components/UseIntroduce';

const headUrl = 'https://zerosoul.github.io/rc-bullets/assets/img/heads/girl.jpg';
function Barrage() {
  // 弹幕屏幕
  const [screen, setScreen] = useState<any>(null);
  // 弹幕内容
  const [bullet, setBullet] = useState('');
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
      // push 纯文本
      if (screen === null) {
        return;
      }
      // 使用 StyleBullet
      screen?.push(
        <StyledBullet
          head={headUrl}
          msg={bullet}
          size='normal'
          // 弹幕文字颜色
          color="#000"
        />
      );
      // 清空 input 数据
        setBullet('')
    }
  };
  const describe = <div>
    <DescribeP>1）暂无内容，将要写一个弹幕效果
    </DescribeP>
  </div>;
  return (
    <>
      <CustomBreadcrumb arr={['通用', '弹幕']} />
      <UseIntroduce describe={describe} />
      <main>
        <div className="screen" style={{ width: '100%', overflowX: 'hidden', height: '360px' }}></div>
        <div className='workStation'>
          <input placeholder='请文明发言...' value={bullet} onChange={handleChange} />
          <button className='send' onClick={handleSend}>发送</button>
        </div>
      </main>
    </>
  );
}
export default Barrage;
