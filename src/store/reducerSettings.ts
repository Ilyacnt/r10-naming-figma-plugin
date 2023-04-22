export interface ReducerSettingsState {
  numberOfResizes: number | string;
}

export enum ReducerSettingsActionTypes { 
  setAllStore = "SET_ALL_STORE", 
  setNumberOfResizes = "SET_NUMBER_OF_RESIZES"
};

export type ReducerOffersActionType = {
  type: ReducerSettingsActionTypes,
  payload: string[] | string | boolean | null
}

const initialState: ReducerSettingsState = {
  numberOfResizes: 3
};


export const reducerSettings = (state = initialState, action: any): ReducerSettingsState  => {
  switch (action.type) {
    case ReducerSettingsActionTypes.setAllStore:
      return { ...action.payload.settings };
    case ReducerSettingsActionTypes.setNumberOfResizes:
      return { ...state, numberOfResizes: action.payload };
    default:
      return state;
  }
};



