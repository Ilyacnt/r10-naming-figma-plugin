import React from 'react'
import styles from './Layout.module.css'
import { ConfigProvider, theme, Input } from 'antd'
import TabsPanel from '../TabsPanel/TabsPanel'

const Layout = () => {
    return (
        <ConfigProvider
            theme={{
                algorithm: theme.darkAlgorithm,
            }}
        >
            <div className={styles.Layout}>
                <TabsPanel />
            </div>
        </ConfigProvider>
    )
}

export default Layout
