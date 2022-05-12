import React from 'react';
import { message, Tooltip } from 'antd';
import ClipboardJS from 'clipboard';
import '../index.scss';
import styled from 'styled-components';

interface CustomBottomProps {
  label: string,
  isShow?: boolean;
}
const CopyValue = styled.div`
  max-width: 100px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const MyCopy = (props: CustomBottomProps) => {
  const { label, isShow } = props;
  console.log('isShow', isShow);
  const copy = new ClipboardJS('.myCopy');
  copy.on('success', (e: any) => {
    message.success('复制成功！');
  });

  return (
    <button
      data-clipboard-text={label}
      className="myCopy"
      type="button"
    >
      <Tooltip title={label}>
        <CopyValue >{label}</CopyValue>
      </Tooltip>
    </button>
  );
};

export default MyCopy;
