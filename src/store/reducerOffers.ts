export interface ReducerOffersState {
  offers: string[];
  loading: boolean;
  error: string;
}

export enum ReducerOffersActionTypes { 
  setAllStore = "SET_ALL_STORE", 
  setOffers = "SET_OFFERS", 
  setLoading = "SET_LOADING", 
  setError = "SET_ERROR",  
};

export type ReducerOffersActionType = {
  type: ReducerOffersActionTypes,
  payload: string[] | string | boolean | null
}

const initialState: ReducerOffersState = {
  offers: [ 
    "_1FIT_",
    "_1INCH_",
    "_3COMMAS_",
    "_ALFACAPITAL_",
    "_ALLGODSACADEMY_",
  ],
  loading: false,
  error: null
};


export const reducerOffers = (state = initialState, action: any): ReducerOffersState  => {
  switch (action.type) {
    case ReducerOffersActionTypes.setOffers:
      return { ...state, offers: action.payload };
    case ReducerOffersActionTypes.setLoading:
      return { ...state, loading: action.payload };
    case ReducerOffersActionTypes.setError:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};



