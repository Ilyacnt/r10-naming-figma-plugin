import { Space, Typography, Input, AutoComplete } from 'antd'
import React, { useState } from 'react'
import { OFFERS_MOCK } from '../../../data/offersMock'
import { DefaultOptionType } from 'antd/es/select'

const options: DefaultOptionType[] = OFFERS_MOCK.map((offer) => {
    return { label: offer }
}, [])

const Main = () => {
    const [offerValue, setOfferValue] = useState<string>('')

    return (
        <div>
            <Space direction="horizontal" style={{ width: '100%' }}>
                <Typography.Text>Offer</Typography.Text>
                <AutoComplete
                    value={offerValue}
                    onSearch={() => console.log('onSearch')}
                    style={{ width: '100%' }}
                    options={options}
                    placeholder="Choose offer"
                />
            </Space>
        </div>
    )
}

export default Main
