import Axios from 'axios'
import { baseURL } from '../env'
export const api = Axios.create({
  baseURL,
  timeout: 8000
})
api.defaults.headers.authorization = JSON.parse(localStorage.getItem('user-token'))

export const accessToken = Axios.create({
  baseURL: 'https://accounts.spotify.com/api',
  timeout: 8000
})
export const spotifyApi = Axios.create({
  baseURL: 'https://api.spotify.com/v1',
  timeout: 8000
})