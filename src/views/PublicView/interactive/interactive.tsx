import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { dataList } from './dataList'
import { Title } from '../../../components/Div';

import './index.scss'

const Wrapper = styled.div`
  border: 1px solid red;
  height: 460px;
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
`

const MessageList = styled.div`
  height: 400px;
  overflow-y: auto;
  margin: 10px 20px;
  flex: 1;
`
const comeName = [
  {
    id: 1,
    name: '依法上网，做遵纪守法的倡导者，互联网不是“法外之地”，依法依规上网是每个网民的责任。要自觉遵守国家有关互联网的法律、法规，坚持依法上网。不信谣、不传谣，不发布、不转发未经证实的有可能会给社会或他人造成伤害的信息；坚决抵制有害身心健康的文字、图片、影音资料及各类淫秽、低俗信息；不发布和传播违反国家法律、影响国家安全、破坏社会稳定、破坏民族团结和宗教信仰的新闻、信息，共建清朗网络空间。',
    text: ''
  }
]
const newList = comeName.concat(dataList)

const Interactive = () => {
  const bottomRef = useRef<any>(null)
  const scrollToBottom = () => {
    if (bottomRef && bottomRef.current) {
      bottomRef.current.scrollIntoView(false);
    }
  }
  useEffect(() => {
    scrollToBottom();
  }, [bottomRef]);


  return (
    <>
      <Wrapper>
        <Title>模拟实时弹幕聊天室</Title>
        <MessageList>
          {
            newList.map(item => {
              const name = (item.name).substring(0, 2) + '****' + (item.name).substring(4, item.name.split('').length)
              return (
                <div key={`${item.name}-${item.id}`} className='content'>
                  <div className='name'>
                    {name} {item.text ? ':' : ''}
                    <span className='text'>{item.text}</span>
                  </div>
                </div>
              )
            })
          }
          <div ref={bottomRef} />
        </MessageList>
      </Wrapper>
    </>
  );
}

export default Interactive;
