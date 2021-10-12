import { AppState } from '../AppState.js'
import Pop from '../utils/Pop.js'
import { api, pokeApi } from './AxiosService.js'

class PokemonService {
  async showAllPokemon() {
    try {
      const res = await pokeApi.get()
      const pokemon = await Promise.all(res.data.results.map(async p => {
        const allPokemon = await pokeApi.get(p.url)
        return allPokemon
      }))
      AppState.pokemon = pokemon
    } catch (error) {
      Pop(error, 'showAllPokemon service client🌋')
    }
  }

  async catchPokemon(pokemon, Id) {
    try {
      pokemon.Id = Id
      const res = await api.post('/api/myPokemon/', pokemon)
      AppState.myPokemon = res.data
      this.getMyPokemon()
    } catch (error) {
      Pop(error, 'catchPokemon service client🌋')
    }
  }

  async getMyPokemon() {
    try {
      const res = await api.get('/api/mypokemon')
      AppState.myPokemon = res.data
    } catch (error) {
      Pop(error, 'getMyPokemon service client🌋')
    }
  }

  async releasePokemon(Id) {
    try {
      await api.delete('/api/mypokemon/' + Id)
      this.getMyPokemon()
    } catch (error) {
      Pop(error, 'releasePokemon service client🌋')
    }
  }
}

export const pokemonService = new PokemonService()
