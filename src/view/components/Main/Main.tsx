import { Space, Typography, Input } from 'antd'
import React from 'react'

const Main = () => {
    return (
        <div>
            <Space direction="horizontal">
                <Typography.Text>Offer</Typography.Text>
                <Input placeholder="Choose offer..." />
            </Space>
        </div>
    )
}

export default Main
