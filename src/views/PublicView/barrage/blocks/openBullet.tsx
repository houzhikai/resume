import { Switch } from 'antd';
import React, { useState } from 'react';
import styled from 'styled-components';

interface Props {
  handleToggleBullet: (value: boolean) => void
}

const DIV = styled.div`
  margin-left: 160px;
`
function OpenBullet(props: Props) {
  const handleToggle = (check: boolean) => {
    props.handleToggleBullet(check)
  }
  return (
    <DIV>
      <Switch checkedChildren="弹" unCheckedChildren="弹" onClick={handleToggle}/>
    </DIV>
  );
}

export default OpenBullet;
