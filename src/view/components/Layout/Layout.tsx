import React from 'react'
import styles from './Layout.module.css'
import { ConfigProvider, theme, Input } from 'antd'

const Layout = () => {
    return (
        <ConfigProvider
            theme={{
                algorithm: theme.darkAlgorithm,
            }}
        >
            <div className={styles.Layout}>
                <Input />
            </div>
        </ConfigProvider>
    )
}

export default Layout
