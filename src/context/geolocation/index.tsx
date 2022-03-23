import React, {createContext, useState, useContext} from 'react';
import Geolocation from '@react-native-community/geolocation';
import { Alert, Platform } from 'react-native';
import {check, PERMISSIONS, RESULTS, openSettings} from 'react-native-permissions';
import { useStore } from '..';
import * as findLocation from '../../services/geolocation';
import { GeolocationContextData, PositionProps } from './props';
import { getPositionUser, getFindInfoPosition } from './reducer';

const GeolocationContext = createContext<GeolocationContextData>({} as GeolocationContextData);

const GeolocationProvider: React.FC = ({children}) => {
  const [state, dispatch] = useStore();
  const [errorPermission, setErrorPermission] = useState(false);
  const {loading, data} = state;


  function requestPermissions() {
    check(Platform.OS === 'ios' ? PERMISSIONS.IOS.LOCATION_ALWAYS : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)
      .then((result) => {
        switch (result) {
          case RESULTS.UNAVAILABLE:
            setErrorPermission(true)
            openSettings()
            break;
          case RESULTS.DENIED:
            setErrorPermission(true)
            openSettings()
            break;
          case RESULTS.LIMITED:
            setErrorPermission(false)
            openSettings()
            break;
          case RESULTS.GRANTED:
            setErrorPermission(false)
            getUserLocation()
            break;
          case RESULTS.BLOCKED:
            setErrorPermission(true)
            break;
        }
      })
      .catch((error) => {
        // …
      });
  };

  async function findDataPosition({latitude, longitude}: PositionProps) {
    const response: any = await findLocation.findLocation({latitude, longitude});
      dispatch(getFindInfoPosition(response))
  };

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
  };

  return (
    <GeolocationContext.Provider value={{data, errorPermission, loading, getUserLocation, requestPermissions}}>
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

export {GeolocationProvider, useGeolocation};