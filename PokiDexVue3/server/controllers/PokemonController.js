import BaseController from '../utils/BaseController.js'
import { Auth0Provider } from '@bcwdev/auth0provider'
import { pokemonService } from '../services/PokemonService.js'

export class PokemonController extends BaseController {
  constructor() {
    super('api/mypokemon')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('', this.getMyPokemon)
      .post('', this.catchPokemon)
      .delete('/:Id', this.releasePokemon)
  }

  async getMyPokemon(req, res, next) {
    try {
      const pokemon = await pokemonService.getMyPokemon(req.userId)
      res.send(pokemon)
    } catch (error) {
      next(error, 'catchPokemon controller server')
    }
  }

  async catchPokemon(req, res, next) {
    try {
      req.body.ownerId = req.userInfo.Id
      const pokemon = await pokemonService.catchPokemon(req.body)
      res.send(pokemon)
    } catch (error) {
      next(error, 'getMyPokemon controller server')
    }
  }

  async releasePokemon(req, res, next) {
    try {
      const pokemon = await pokemonService.releasePokemon(req.params.Id)
      res.send(pokemon)
    } catch (error) {
      next(error, 'releasePokemon controller server')
    }
  }
}
