import expect from 'expect';
import { DataProps } from '~/context/geolocation/props';
import { geolocationReducer, getPositionUser, getFindInfoPosition, initialState } from '~/context/geolocation/reducer';

describe('Test geolocation reducer', () => {
  test('should be dispatch getPositionUser', () => {
    const latitude = -242445;
    const longitude = -42024442;
    const action: any = getPositionUser({latitude, longitude});

    const state = {
      ...initialState,
      data: null,
      latitude,
      longitude,
      loading: true,
    };
    expect(geolocationReducer(initialState, action)).toEqual(state);
  });

  test('should be dispatch getPositionUser', () => {
    const data: DataProps = {
      "coord": {
          "lon": -44.0934,
          "lat": -22.5082
      },
      "weather": [
          {
              "id": 804,
              "main": "Clouds",
              "description": "overcast clouds",
              "icon": "04n"
          }
      ],
      "base": "stations",
      "main": {
          "temp": 18.61,
          "feels_like": 18.82,
          "temp_min": 18.61,
          "temp_max": 18.61,
          "pressure": 1021,
          "humidity": 88,
          "sea_level": 1021,
          "grnd_level": 977
      },
      "visibility": 10000,
      "wind": {
          "speed": 0.94,
          "deg": 131,
          "gust": 2.51
      },
      "clouds": {
          "all": 95
      },
      "dt": 1647997974,
      "sys": {
          "country": "BR",
          "sunrise": 1647939643,
          "sunset": 1647983144
      },
      "timezone": -10800,
      "id": 3444876,
      "name": "Volta Redonda",
      "cod": 200
    }
    const action = getFindInfoPosition(data);

    const state = {
      ...initialState,
      data: data,
      loading: false,
    };
    expect(geolocationReducer(initialState, action)).toEqual(state);
  });

});