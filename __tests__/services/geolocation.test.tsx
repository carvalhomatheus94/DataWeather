import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { DataProps } from '../../src/context/geolocation/props';

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
      "temp": 18.15,
      "feels_like": 18.45,
      "temp_min": 18.15,
      "temp_max": 18.15,
      "pressure": 1021,
      "humidity": 93,
      "sea_level": 1021,
      "grnd_level": 977
  },
  "visibility": 10000,
  "wind": {
      "speed": 2.2,
      "deg": 130,
      "gust": 7.03
  },
  "clouds": {
      "all": 100
  },
  "dt": 1647901198,
  "sys": {
      "country": "BR",
      "sunrise": 1647853223,
      "sunset": 1647896802
  },
  "timezone": -10800,
  "id": 3444876,
  "name": "Volta Redonda",
  "cod": 200
}

describe('sucess request api', () => {
  it('returns data when sendMessage is called', async () => {
      var mock = new MockAdapter(axios);
      await mock.onGet("https://api.openweathermap.org/data/2.5/weather?lat=-22.5082000000000022&lon=-44.09341833333333&units=Metric&appid=9e349360c639f2cc8befe56e9835907a").reply(200, {
        data: data
      });
  });
});

describe('failed request api', () => {
  it('returns data when sendMessage is called', async () => {
      var mock = new MockAdapter(axios);
      await mock.onGet("https://api.openweathermap.org/data/2.5/weather?lat=-22.5082000000000022&lon=-44.09341833333333&units=Metric&appid=9e349360c639f2cc8befe56e9835907a").networkError();
  });
});