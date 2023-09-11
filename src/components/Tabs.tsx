import React, { useEffect, useState } from 'react'
import Tab from './Tab'
import { TabsValues } from '../ui'

type Props = {
    tabHandler: (e) => void
}

const Tabs: React.FC<Props> = ({ tabHandler }: Props) => {
    const tabsData = [
        {
            id: 1,
            value: TabsValues.Default,
        },
        {
            id: 2,
            value: TabsValues.Settings,
        },
    ]

    return (
        <div className="tabs-container">
            <div id="tabs" className="tabs">
                {tabsData.map((tab) => (
                    <Tab key={tab.id} tab={tab} currentTab={tabHandler} />
                ))}
                <span className="glider"></span>
            </div>
        </div>
    )
}

export default Tabs
