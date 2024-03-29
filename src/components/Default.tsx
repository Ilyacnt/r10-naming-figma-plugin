import React, { useEffect } from 'react'
import Select from '../ui/Select'
import Input from '../ui/Input'
import { fetchOffers } from '../store/reducerOffersActions'
import { setCreoType, setDesignerColor, setOffer, setOrderBy } from '../store/reducerDefaultActions'
import { setBuyer } from '../store/reducerDefaultActions'
import Button from '../ui/Button'
import { useAppDispatch, useAppSelector } from '../store/hooks'

const Default = () => {
    const { offer, designerColor, buyer, creoType, orderBy } = useAppSelector((state) => state.default)
    const offersData = useAppSelector((state) => state.offers.offers)
    const dispatch = useAppDispatch()
    const creativesTypeData = ['stat', 'neu', 'rekl', 'krsl', 'prod', 'fvr']
    const orderByData = ['Top to Bottom', 'Left to Right', 'Layer Panel']

    useEffect(() => {
        // @ts-ignore
        dispatch(fetchOffers())
    }, [])

    const renameHandle = () => {
        parent.postMessage({ pluginMessage: { type: 'default' } }, '*')
    }

    const cancelHandle = () => {
        parent.postMessage({ pluginMessage: { type: 'cancel' } }, '*')
    }

    return (
        <div className="main-container default-container">
            <Select
                type="Search"
                label="Offer:"
                placeholder="Search..."
                options={offersData}
                onSelect={setOffer}
                value={offer}
            />
            <Input
                label="Designer&nbsp;color:"
                placeholder="Sapphire"
                value={designerColor}
                onInput={setDesignerColor}
            />
            <Input label="Buyer:" placeholder="AK" value={buyer} onInput={setBuyer} />
            <Select
                type="Search"
                label="Creo&nbsp;type:"
                placeholder="Search..."
                options={creativesTypeData}
                onSelect={setCreoType}
                value={creoType}
            />
            <div style={{ display: 'flex' }}>
                <Select
                    type="Search"
                    label="Order&nbsp;by:"
                    placeholder="Search..."
                    options={orderByData}
                    onSelect={setOrderBy}
                    value={orderBy}
                />
            </div>
            <div className="buttons-container">
                <Button type="secondary" onButton={cancelHandle}>
                    Cancel
                </Button>
                <Button type="primary" onButton={renameHandle}>
                    Rename
                </Button>
            </div>
        </div>
    )
}

export default Default
