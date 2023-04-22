import { ReducerDefaultActionTypes } from "./reducerDefault";


export function setOffer(offers: string) {
  return { type: ReducerDefaultActionTypes.setOffer, payload: offers };
}

export function setDesignerColor(designerColor: string) {
  return { type: ReducerDefaultActionTypes.setDesignerColor, payload: designerColor };
}

export function setBuyer(buyer: string) {
  return { type: ReducerDefaultActionTypes.setBuyer, payload: buyer };
}

export function setCreoType(creoTypes: string) {
  return { type: ReducerDefaultActionTypes.setCreoType, payload: creoTypes };
}

export function setOrderBy(orderBy: string) {
  return { type: ReducerDefaultActionTypes.setOrderBy, payload: orderBy };
}
