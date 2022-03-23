import { Alert } from "react-native";
import { api, appId } from "./api";

interface Response {
  latitude: string | number;
  longitude: string | number;
}

export async function findLocation({latitude, longitude} : Response) {
  return new Promise((resolve) => {
     api.get(`weather?lat=${latitude}&lon=${longitude}&units=Metric&appid=${appId}`)
      .then(({data}) => {
        resolve(data)
      })
      .catch(err => {
        resolve(false)
        Alert.alert('Localização não encontrada.')
      })
  })
}