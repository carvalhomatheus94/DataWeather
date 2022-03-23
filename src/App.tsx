import React from 'react'
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import RootNavigator from './router'
import { NavigationContainer } from '@react-navigation/native';
import { StoreProvider } from './context';
import { initialState, geolocationReducer } from './context/geolocation/reducer';

const App = () => {
  return (
    <NavigationContainer>
      <StoreProvider initialState={initialState} reducer={geolocationReducer}>
        <SafeAreaProvider>
            <RootNavigator />
        </SafeAreaProvider>
      </StoreProvider>
    </NavigationContainer>
  )
}

export default App