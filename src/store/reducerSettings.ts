export interface ReducerSettingsState {
    numberOfResizes: number | string
    definedUniqueCode: number | string
}

export enum ReducerSettingsActionTypes {
    setAllStore = 'SET_ALL_STORE',
    setNumberOfResizes = 'SET_NUMBER_OF_RESIZES',
    setDefinedUniqueCode = 'SET_DEFINED_UNIQUE_CODE',
}

export type ReducerOffersActionType = {
    type: ReducerSettingsActionTypes
    payload: string[] | string | boolean | null
}

const initialState: ReducerSettingsState = {
    numberOfResizes: 3,
    definedUniqueCode: '',
}

export const reducerSettings = (state = initialState, action: any): ReducerSettingsState => {
    switch (action.type) {
        case ReducerSettingsActionTypes.setAllStore:
            return { ...action.payload.settings }
        case ReducerSettingsActionTypes.setNumberOfResizes:
            return { ...state, numberOfResizes: action.payload }
        case ReducerSettingsActionTypes.setDefinedUniqueCode:
            return { ...state, definedUniqueCode: action.payload }
        default:
            return state
    }
}
