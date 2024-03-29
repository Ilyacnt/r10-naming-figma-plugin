import { ReducerSettingsActionTypes } from './reducerSettings'

export function setNumberOfResizes(number: number | string) {
    return { type: ReducerSettingsActionTypes.setNumberOfResizes, payload: number }
}

export function setDefinedUniqueCode(value: number | string) {
    return { type: ReducerSettingsActionTypes.setDefinedUniqueCode, payload: value }
}
