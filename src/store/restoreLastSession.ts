import { store } from './store';
import { ReducerDefaultActionTypes } from "./reducerDefault";

export const restoreLastSession = () => {


  const updateStore = (newStore) => {
    return {
      type: ReducerDefaultActionTypes.setAllStore,
      payload: newStore,
    };
  };

  onmessage = (event) => {
    let lastRunData = event.data.pluginMessage;

    console.log(lastRunData);
    store.dispatch(updateStore(lastRunData))
  };
};