import React from 'react';
import styled from 'styled-components';
import { CaretUpOutlined, CaretDownOutlined } from '@ant-design/icons';
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
`
const SalesIn = styled.div`
  display: flex;
  text-align: left;
`

const Products = () => {
  const produces = [
    {
      name: 'Galaxy A51',
      model: '三星',
      number: '4100',
      onYearOnYearBasis: 'up'
    },
    {
      name: 'OPPO F5',
      model: 'OPPO',
      number: '3751',
      onYearOnYearBasis: 'up'
    },
    {
      name: 'Galaxy A71',
      model: '三星',
      number: '3213',
      onYearOnYearBasis: 'down'
    },
    {
      name: 'Iphone 11',
      model: '苹果',
      number: '2881',
      onYearOnYearBasis: 'up'
    },
    {
      name: 'Galaxy S20',
      model: '三星',
      number: '2589',
      onYearOnYearBasis: 'up'
    },
  ]
  return (
    <div>
      {
        produces?.map(item => {
          return (
            <Wrapper>
              <div style={{ width: 82 }}>{item.name}</div>
              <div style={{ width: 30, color: '#999' }}>{item.model}</div>
              <SalesIn>
                <div style={{ color: '#77ee5a' }}>{Number(item.number).toLocaleString()}</div>
                <div style={{ marginLeft: 20 }}>
                  {
                    item.onYearOnYearBasis === 'up' ?
                      <CaretUpOutlined style={{ color: '#ff4d4f' }} /> :
                      <CaretDownOutlined style={{ color: '#8fe663' }} />}</div>
              </SalesIn>
            </Wrapper>
          )
        })
      }
    </div>
  );
}

export default Products;
