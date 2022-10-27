import React from 'react';
import { Typography } from 'antd';

const { Text } = Typography

const EllipsisMiddle = (props: { label: string, isShow?: boolean, suffixCount?: number }) => {
  const { isShow, label, suffixCount } = props

  const EllipsisMiddleWord: React.FC<{ suffixLength: number }> = ({ suffixLength }) => {
    const start = label.slice(0, label.length - suffixLength).trim()
    const suffix = label.slice(-suffixLength).trim()
    return (
      <Text style={{ maxWidth: '100%' }} ellipsis={{ suffix, tooltip: isShow ? label : '' }}>
        {start}
      </Text>
    )
  }

  return (
    <EllipsisMiddleWord suffixLength={suffixCount ?? 12}>
      {label}
    </EllipsisMiddleWord>
  );
}

export default EllipsisMiddle;
