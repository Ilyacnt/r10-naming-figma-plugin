import { Space, Typography, Input, AutoComplete } from 'antd'
import React from 'react'

const options = [{ value: 'HOFF_' }, { value: 'GOK_' }, { value: 'YANDEXMAPS_' }]

const Main = () => {
    return (
        <div>
            <Space direction="horizontal" style={{ width: '100%' }}>
                <Typography.Text>Offer</Typography.Text>
                <AutoComplete
                    style={{ width: '100%' }}
                    options={options}
                    placeholder="try to type `b`"
                    filterOption={(inputValue, option) =>
                        option!.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                    }
                />
            </Space>
        </div>
    )
}

export default Main
