import React, {createContext, useState, useContext} from 'react';
import Geolocation from '@react-native-community/geolocation';
import { Alert } from 'react-native';
import { useStore } from '..';
import * as findLocation from '../../services/geolocation';
import { GeolocationContextData, PositionProps } from './props';
import { getPositionUser, getFindInfoPosition } from './reducer';

const GeolocationContext = createContext<GeolocationContextData>({} as GeolocationContextData);

const GeolocationProvider: React.FC = ({children}) => {
  const [state, dispatch] = useStore();
  const {loading, data} = state

  async function findDataPosition({latitude, longitude}: PositionProps) {
    const response: any = await findLocation.findLocation({latitude, longitude});
      dispatch(getFindInfoPosition(response))
  }

  function getUserLocation() {
    Geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        dispatch(getPositionUser({latitude, longitude}))
        findDataPosition({latitude: latitude, longitude})
      },
      () => {
        Alert.alert('Localização não encontrada.')
      },
      {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 20000,
      }
    );
  }

  return (
    <GeolocationContext.Provider value={{data, loading, getUserLocation}}>
      {children}
    </GeolocationContext.Provider>
  );
};

function useGeolocation() {
  const context = useContext(GeolocationContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider.');
  }

  return context;
}

export {GeolocationProvider, useGeolocation}