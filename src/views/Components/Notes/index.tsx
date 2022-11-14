import { Typography } from 'antd';
import React, { useState } from 'react';
import styled from 'styled-components';

const { Paragraph } = Typography;
const Wrapper = styled.div`
  margin: 20px;
`

const Notes = () => {
  const [editableStr, setEditableStr] = useState('笔记');
  return (
    <Wrapper>
      <h1>
        <Paragraph editable={{ onChange: setEditableStr }}>
          {editableStr}
        </Paragraph>
      </h1>
    </Wrapper>
  );
}

export default Notes;
