import React from 'react';
import styled from 'styled-components';
const Wrapper = styled.div`
  font-size: 16px;
  line-height: 40px;
  box-shadow: 0px -2px 2px -2px #ccc;
  background-color: #fff;
  border-top: 1px solid #ccc;
  text-align: center;
`

function AppFooter() {
  return (
    <Wrapper>
      我是底部栏，暂无内容填充！
    </Wrapper>
  );
}

export default AppFooter;
