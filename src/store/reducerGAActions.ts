import { ReducerGAActionTypes } from './reducerGA';


export function setOffer(offers: string[]) {
  return { type: ReducerGAActionTypes.setOffer, payload: offers };
}

export function setDesignerColor(designerColor: string) {
  return { type: ReducerGAActionTypes.setDesignerColor, payload: designerColor };
}

export function setBuyer(buyer: string) {
  return { type: ReducerGAActionTypes.setBuyer, payload: buyer };
}

export function setFrom(buyer: string) {
  return { type: ReducerGAActionTypes.setFrom, payload: buyer };
}

export function setOrderBy(buyer: string) {
  return { type: ReducerGAActionTypes.setOrderBy, payload: buyer };
}
