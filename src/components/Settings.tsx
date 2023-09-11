import React from 'react'
import Input from '../ui/Input'
import { useSelector } from 'react-redux'
import { setNumberOfResizes, setDefinedUniqueCode } from '../store/reducerSettingsActions'

const Settings = () => {
    const { numberOfResizes, definedUniqueCode } = useSelector((state: any) => state.settings)

    return (
        <div className="main-container settings-container">
            <Input
                label="Number&nbsp;of&nbsp;resizes: "
                placeholder="3"
                onInput={setNumberOfResizes}
                value={numberOfResizes}
            />
            <Input
                label="Unique&nbsp;code: "
                placeholder="AABBCCDD"
                onInput={setDefinedUniqueCode}
                value={definedUniqueCode}
            />
            <span className="version">Version 2.2.0</span>
        </div>
    )
}

export default Settings
