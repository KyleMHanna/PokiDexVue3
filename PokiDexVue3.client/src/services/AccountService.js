import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import Pop from '../utils/Pop.js'
import { api } from './AxiosService'

class AccountService {
  async getAccount() {
    try {
      const res = await api.get('/account')
      AppState.account = res.data
    } catch (err) {
      logger.error('HAVE YOU STARTED YOUR SERVER YET???', err)
    }
  }

  async getMyPokemon() {
    try {
      const res = await api.get('/api/mypokemon')
      AppState.myPokemon = res.data
    } catch (error) {
      Pop.toast(error, 'getMyPokemon service client🌋')
    }
  }
}

export const accountService = new AccountService()
