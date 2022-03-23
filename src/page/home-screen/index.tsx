import React, {useEffect} from 'react'
import {ActivityIndicator, Text, View} from 'react-native'
import { Screen, Button, List } from '../../components'
import { useGeolocation } from '../../context/geolocation'
import { color, Padding } from '../../theme'
import { HomeScreenProps } from './props'
import { TitleStyle } from './styles'

const HomeScreen: React.FC<HomeScreenProps> = () => {
  const {getUserLocation, loading, data} = useGeolocation()

  useEffect(() => getUserLocation(),[])

  return (
    <Screen
      backgroundColor={color.primary}
      style={{
        justifyContent: 'space-between',
        flex: 1
      }}
    >
      <View style={Padding}>
        {
          loading ? <ActivityIndicator size='small' color={color.white}/> : data ? (
            <>
              <List Title='País' Description={data.sys.country} iconName='flag' />
              <List Title='Cidade' Description={data.name} testID="todo-item" iconName='building'/>
              <List Title='Temperatura' Description={Math.trunc(data.main.temp) + '°C'} iconName={'temperature-high'}/>
              <List Title='Temperatura mínima' Description={Math.trunc(data.main.temp_min) + '°C'}  iconName={'thermometer-empty'} />
              <List Title='Temperatura máxima' Description={Math.trunc(data.main.temp_max) + '°C'}  iconName={'temperature-high'} />
              <List Title='Umidade' Description={data.main.humidity + '%'} iconName='water' />
            </>
          ) : (
            <Text style={TitleStyle}>Atualize os dados da sua cidade</Text>
          )
        }
       
      </View>
      <Button
        TextButton='Atualizar Busca'
        BgColor={color.black}
        onPress={() => getUserLocation()}
        loading={loading}
      />
    </Screen>
  );
}

export default HomeScreen;