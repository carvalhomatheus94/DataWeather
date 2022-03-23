import React, {createContext, useReducer, useContext} from 'react';
import { GeolocationProvider } from './geolocation';
const Store = createContext<any>(null);
Store.displayName = 'Store';

export const useStore = () => useContext(Store);

export const StoreProvider = ({ children, initialState, reducer }) => {
  const [globalState, dispatch] = useReducer(reducer, initialState);

  return (
    <Store.Provider value={[globalState, dispatch]}>
      <GeolocationProvider>
        {children}
      </GeolocationProvider>
    </Store.Provider>
  );
};