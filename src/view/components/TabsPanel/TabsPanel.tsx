import React from 'react'
import { Tabs } from 'antd'
import type { TabsProps } from 'antd'
import Main from '../Main/Main'

const onChange = (key: string) => {
    console.log(key)
}

const items: TabsProps['items'] = [
    {
        key: '1',
        label: 'Main',
        children: <Main />,
    },
    {
        key: '2',
        label: 'Settings',
        children: `Content of Tab Pane 2`,
    },
]

const TabsPanel = () => {
    return <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
}

export default TabsPanel
