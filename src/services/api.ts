import axios from 'axios'

export const appId = '9e349360c639f2cc8befe56e9835907a';

export const api = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5',
  timeout: 30000,
})