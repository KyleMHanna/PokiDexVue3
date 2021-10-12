import Axios from 'axios'
import { baseURL } from '../env'
export const api = Axios.create({
  baseURL,
  timeout: 8000
})
// FIXME - might not work with it not being v2
export const pokeApi = Axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon',
  timeout: 8000
})
