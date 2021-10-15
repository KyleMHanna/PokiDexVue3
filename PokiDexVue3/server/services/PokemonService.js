import { dbContext } from '../db/DbContext.js'

class PokemonService {
  async catchPokemon(pokemonData) {
    const pokemon = await dbContext.Pokemon.create(pokemonData)
    await pokemon.populate('owner')
    return pokemon
  }

  async getMyPokemon(userId) {
    const pokemon = await dbContext.Pokemon.find({ ownerId: userId })
    return pokemon
  }

  async releasePokemon(Id) {
    const pokemon = await dbContext.Pokemon.findByIdAndDelete(Id)
    return pokemon
  }
}

export const pokemonService = new PokemonService()
