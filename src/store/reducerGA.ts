export interface ReducerGAState {
  offer: string
  designerColor: string
  buyer: string
  from: number
  orderBy: string
}

export enum ReducerGAActionTypes {
  setAllStore = 'SET_ALL_STORE',
  setOffer = 'SET_OFFER_GA',
  setDesignerColor = 'SET_DESIGNER_COLOR_GA',
  setBuyer = 'SET_BUYER_GA',
  setFrom = 'SET_FROM_GA',
  setOrderBy = 'SET_ORDER_BY_GA',
}

export type ReducerGAActionType = {
  type: ReducerGAActionTypes
  payload: string[] | string | number
}

const initialState: ReducerGAState = {
  offer: '',
  designerColor: '',
  buyer: '',
  from: 1,
  orderBy: '',
}

export const reducerGA = (state = initialState, action: any): ReducerGAState => {
  switch (action.type) {
    case ReducerGAActionTypes.setAllStore:
      return action.payload.ga
    case ReducerGAActionTypes.setOffer:
      return { ...state, offer: action.payload }
    case ReducerGAActionTypes.setDesignerColor:
      return { ...state, designerColor: action.payload }
    case ReducerGAActionTypes.setBuyer:
      return { ...state, buyer: action.payload }
    case ReducerGAActionTypes.setFrom:
      return { ...state, from: action.payload }
    case ReducerGAActionTypes.setOrderBy:
      return { ...state, orderBy: action.payload }
    default:
      return state
  }
}
