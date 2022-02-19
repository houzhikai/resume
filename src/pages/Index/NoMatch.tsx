import React from 'react'
import { Result, Button } from 'antd';

const NoMatch: React.FC = () => {
    return (
        <Result
            status="404"
            title="404"
            subTitle="对不起，您访问的页面不存在，请确定地址！"
            extra={<Button type="primary" href='/'>Back Home</Button>}
        />
    )
}
export { NoMatch }

