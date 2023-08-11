import { ReducerDefaultState } from '../store/reducerDefault'
import { ReducerGAState } from '../store/reducerGA'

export enum EFigmaMessageType {
    CANCEL = 'cancel',
    GA = 'ga',
    DEFAULT = 'default',
    SAVE = 'save',
    FETCH_OFFERS = 'fetchOffers',
}

export interface IFigmaMessage<T extends EFigmaMessageType> {
    pluginMessage: {
        type: T
        state?: T extends EFigmaMessageType.SAVE ? ReducerGAState : never
    }
}

// TEST DTO
const message: IFigmaMessage<EFigmaMessageType.DEFAULT> = {
    pluginMessage: {
        type: EFigmaMessageType.DEFAULT,
    },
}
