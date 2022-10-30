import React, { useState } from 'react';
import styled from 'styled-components';
import { CaretUpOutlined, CaretDownOutlined } from '@ant-design/icons';
import { Button } from 'antd';
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  line-height: 30px;
  margin: 4px;
`
const Author = styled.div`
   margin: 0 10px;
   background: #e09790;
   color: white;
   padding: 0 8px;
   border-radius: 6px;
`
const Replier = styled.div`
  margin-left: 40px; 
  margin-right: 20px;
  background: #84e770;
  border-radius: 6px;
  padding: 0 10px;
`
const ReplyText = styled.span`
  margin: 16px 60px;
  color: #1890ff;
`

const DialogMessage = () => {
  const [visible, setVisible] = useState<boolean>(false)   // 默认不展示回复信息

  const messageList = [
    {
      name: 'name1',
      id: 1,
      text: '这是一句话111111',
      isShow: false,
      reply: [
        {
          name: 'reply1',
          text: '回复你一句话1111'
        }
      ]
    },
    {
      name: 'name2',
      id: 2,
      text: '这是一句话222222',
      isShow: false,
      reply: [
        {
          name: 'reply1',
          text: '回复你一句话1111'
        },
        {
          name: 'reply2',
          text: '回复你一句话1111'
        }
      ]
    },
    {
      name: 'name3',
      id: 3,
      text: '这是一句话333333',
      isShow: false,
      reply: [
        {
          name: 'reply1',
          text: '回复你一句话1111'
        },
        {
          name: 'reply2',
          text: '回复你一句话1111'
        }, {
          name: 'reply3',
          text: '回复你一句话2222'
        }
      ]
    },
    {
      name: 'name4',
      id: 4,
      text: '这是一句话444444',
      isShow: false,
      reply: [
        {
          name: 'reply1',
          text: '回复你一句话1111'
        },
        {
          name: 'reply2',
          text: '回复你一句话1111'
        }
      ]
    },
    {
      id: 5,
      name: 'name5',
      text: '没有回复语句',
      isShow: false,
      reply: []
    }
  ]
  const handleClick = (index: number) => {
    console.log('index', index)
    setVisible(!visible)
  }
  return (
    <>
      {messageList.map((item, idx, record) => {
        const replyLength = item.reply.length
        return (
          <div key={item.name}>
            {`visible:  ${visible} `}
            <Wrapper>
              <Author >{item.name}:</Author>
              <div>{item.text}</div>
            </Wrapper>
            {/* 展开/收起条回复 */}
            <ReplyText>
              {
                !visible && replyLength > 0 ? (
                  <Button type='link' icon={<CaretDownOutlined />} onClick={() => handleClick(idx)}>
                    {`展开${replyLength}条回复`}
                  </Button>
                ) : (replyLength === 0 ? null :
                  <Button type='link' icon={<CaretUpOutlined />} onClick={() => handleClick(idx)}>
                    {`关闭${replyLength}条回复`}
                  </Button>
                )
              }
            </ReplyText>
            {/* 回复对话框 */}
            {
              visible && item.reply?.map(p => {
                return (
                  <Wrapper key={p.name}>
                    <Replier>{p.name}:</Replier>
                    <div>{p.text}</div>
                  </Wrapper>
                )
              })
            }
          </div>
        )
      })}
    </>
  );
}

export default DialogMessage;
