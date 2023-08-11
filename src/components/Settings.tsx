import React from 'react'
import Input from '../ui/Input'
import { useSelector } from 'react-redux'
import { setNumberOfResizes } from '../store/reducerSettingsActions'

const Settings = () => {
    const { numberOfResizes } = useSelector((state) => state.settings)

    return (
        <div className="main-container settings-container">
            <Input
                label="Number&nbsp;of&nbsp;resizes: "
                placeholder="3"
                onInput={setNumberOfResizes}
                value={numberOfResizes}
            />
            <span className="version">Version 2.1.0</span>
        </div>
    )
}

export default Settings
