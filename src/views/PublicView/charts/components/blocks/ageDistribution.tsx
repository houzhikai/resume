import React from 'react';
import styled from 'styled-components';
import Echarts from '../blocks/echarts';

const Wrapper = styled.div`
  display: flex;
`
const AgeLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  line-height: 29px;
`

const AgeDistribution = () => {
  const ages = [
    {
      color: 'blue',
      text: '>24 y.o',
      percent: 80
    },
    {
      color: 'green',
      text: '20 -24 y.o',
      percent: 70
    },
    {
      color: 'yellow',
      text: '16-20 y.o',
      percent: 28
    },
    {
      color: 'pink',
      text: '<16 y.o',
      percent: 22
    },
  ]
  const amount = ages.map(item => item.percent).reduce((a, b) => a + b)
  return (
    <Wrapper>
      <div style={{ width: '40%', marginRight: 10 }}>
        <h2>客户年龄</h2>
        {
          ages?.map(item => {
            return (
              <AgeLeft>
                <div style={{ background: item.color, width: 20, height: 20, borderRadius: 6 }}></div>
                <div style={{ marginLeft: 20, marginRight: 40, width: 100, }}>{item.text}</div>
                <div style={{ color: '#999' }}>{((item.percent) / amount * 100).toFixed(0) + '%'}</div>
              </AgeLeft>
            )
          })
        }
      </div>
      <Echarts ages={ages} />
    </Wrapper>
  );
}

export default AgeDistribution;
