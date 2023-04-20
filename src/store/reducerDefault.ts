export interface ReducerDefaultState {
  offer: string;
  designerColor: string;
  buyer: string;
  creoType: string;
  from: number;
  orderBy: string;
}

export enum ReducerDefaultActionTypes { 
  setAllStore = "SET_ALL_STORE", 
  setOffer = "SET_OFFER_DEFAULT", 
  setDesignerColor = "SET_DESIGNER_COLOR_DEFAULT",
  setBuyer = "SET_BUYER_DEFAULT", 
  setCreoType = "SET_CREO_TYPE_DEFAULT",
  setFrom = "SET_FROM_DEFAULT",
  setOrderBy = "SET_ORDER_BY_DEFAULT"
};

export type ReducerDefaultActionType = {
  type: ReducerDefaultActionTypes,
  payload: string[] | string | number
}

const initialState: ReducerDefaultState = {
  offer: '',
  creoType: 'stat',
  designerColor: "",
  buyer: "",
  from: 1,
  orderBy: "Top to Bottom"
};


export const reducerDefault = (state = initialState, action: any): ReducerDefaultState => {
  switch (action.type) {
    case ReducerDefaultActionTypes.setAllStore:      
      return { ...action.payload.default };
    case ReducerDefaultActionTypes.setOffer:
      return { ...state, offer: action.payload };
    case ReducerDefaultActionTypes.setDesignerColor:
        return { ...state, designerColor: action.payload };
    case ReducerDefaultActionTypes.setBuyer:
          return { ...state, buyer: action.payload };
    case ReducerDefaultActionTypes.setCreoType:
      return { ...state, creoType: action.payload };
    case ReducerDefaultActionTypes.setFrom:
      return { ...state, from: action.payload };
    case ReducerDefaultActionTypes.setOrderBy:
      return { ...state, orderBy: action.payload };
    default:
      return state;
  }
};



