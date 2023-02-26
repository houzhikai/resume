import { Button, Divider, Input } from 'antd';
import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`
const Search1 = () => {
  const [value] = useState('111')
  console.log('value', value)
  // const list = ['111', '222', '333', '444']
  // useEffect(() => {
  //   let loop = setTimeout(() => {
  //     for (let i = 0; i < list.length; i++) {
  //       setValue(list[i])
  //       if (i === list.length) {
  //         i = -1
  //       }
  //     }
  //   }, 3000)
  //   return () => clearTimeout(loop)
  // }, [value, list])
  const handleClick = (e: any) => {
    console.log('111', e)
  }
  return (
    <>
      <Divider plain>placeholder 滚动</Divider>
      <Wrapper>
        <span>search1:   </span>
        <Input
          style={{ width: 300, marginLeft: 10 }}
          placeholder={value}
        />
        <Button type='primary' onClick={handleClick}>搜索</Button>
      </Wrapper>
    </>
  );
}

export default Search1;
