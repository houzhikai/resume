import { useEffect, useRef } from 'react';
import CustomBreadcrumb from '../../../components/CustomBreadcrumb';
import { DescribeP, DIV, KeyTag } from '../../../components/Div';
import UseIntroduce from '../../../components/UseIntroduce';
import styled from 'styled-components';
import { dataList } from './dataList'
import './index.scss'

const Wrapper = styled.div`
  border: 1px solid red;
  height: 460px;
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
`
const Title = styled.div`
  height: 40px;
  line-height: 40px;
  font-size: 20px;
  font-weight: 700;
  padding-left: 20px;
  border-bottom: 1px solid #ccc;
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

  const describe =
    <DescribeP>
      <DIV>1）这是一个从上到下弹幕互动的效果</DIV>
      <DIV>2) 将要实现的功能：
        <DIV>1、评论上下滚动，且逐条向上翻</DIV>
        <DIV>2、默认滚动条滚动到<KeyTag>底部</KeyTag></DIV>
        <DIV>3、名称默认打码，隐藏名称，但是<KeyTag>文字不能隐藏，且需要支持多行展示</KeyTag></DIV>
        <DIV>4、<KeyTag>拼接文明提示文字</KeyTag></DIV>
      </DIV>
    </DescribeP>

  return (
    <>
      <CustomBreadcrumb arr={['通用', '互动']} />
      <UseIntroduce describe={describe} />
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
