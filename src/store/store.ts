import { createStore, combineReducers, applyMiddleware } from 'redux'
import { reducerDefault } from './reducerDefault'
import { reducerGA } from './reducerGA'
import { reducerOffers } from './reducerOffers'
import thunk from 'redux-thunk'
import { reducerSettings } from './reducerSettings'



const sessionSaver = store => next => action => {
    let result = next(action)
    parent.postMessage({ pluginMessage: { type: "save", state: store.getState() } }, "*");
    return result
}




export const store = createStore(combineReducers({default: reducerDefault, ga: reducerGA, offers: reducerOffers, settings: reducerSettings}), applyMiddleware(thunk, sessionSaver))


export type StateType = ReturnType<typeof store.getState>