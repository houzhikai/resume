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
  const [openList, setOpenList] = useState<number[]>([]);

  const messageList = [
    {
      name: 'name1',
      id: 1,
      text: '这是一句话111111',
      isShow: false,
      reply: [
        {
          name: 'reply1',
          id: 11,
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
          id: 12,
          text: '回复你一句话1111'
        },
        {
          name: 'reply2',
          id: 13,
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
          id: 4,
          text: '回复你一句话1111'
        },
        {
          name: 'reply2',
          id: 5,
          text: '回复你一句话1111'
        }, {
          name: 'reply3',
          id: 6,
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
          id: 7,
          text: '回复你一句话1111'
        },
        {
          name: 'reply2',
          id: 8,
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
  const handleClick = (id: number) => {
    if (openList.includes(id)) {
      const val = openList.filter((p: number) => p !== id)
      setOpenList(val)
    } else {
      setOpenList(oldId => [...oldId, id])
    }
  }

  return (
    <>
      {messageList.map(item => {
        const replyLength = item.reply.length
        return (
          <div key={item.name}>
            <Wrapper>
              <Author >{item.name}:</Author>
              <div>{item.text}</div>
            </Wrapper>
            {/* 展开/收起条回复 */}
            <ReplyText>
              {
                !openList.includes(item.id) && replyLength > 0 ? (
                  <Button type='link' icon={<CaretDownOutlined />} onClick={() => handleClick(item.id)}>
                    {`展开${replyLength}条回复`}
                  </Button>
                ) : (replyLength === 0 ? null :
                  <Button type='link' icon={<CaretUpOutlined />} onClick={() => handleClick(item.id)}>
                    {`关闭${replyLength}条回复`}
                  </Button>
                )
              }
            </ReplyText>
            {/* 回复对话框 */}
            {
              openList.includes(item.id) && item.reply?.map(p => {
                return (
                  <Wrapper key={`${item.id}-${p.id}`}>
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
