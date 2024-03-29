import React from 'react'
import Input from '../ui/Input'
import { useAppSelector } from '../store/hooks'
import { setNumberOfResizes, setDefinedUniqueCode } from '../store/reducerSettingsActions'

const Settings = () => {
    const { numberOfResizes, definedUniqueCode } = useAppSelector((state) => state.settings)

    return (
        <div className="main-container settings-container">
            <Input
                label="Number&nbsp;of&nbsp;resizes: "
                placeholder="3"
                onInput={setNumberOfResizes}
                value={numberOfResizes.toString()}
            />
            <Input
                label="Unique&nbsp;code: "
                placeholder="AABBCCDD"
                onInput={setDefinedUniqueCode}
                value={definedUniqueCode}
                maxLength={8}
            />
            <span className="version">Version 2.2.0</span>
        </div>
    )
}

export default Settings
