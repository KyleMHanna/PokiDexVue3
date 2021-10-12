import mongoose from 'mongoose'
import { AccountSchema, ProfileSchema } from '../models/Account'
import { PokemonSchema } from '../models/Pokemon.js'
import { ValueSchema } from '../models/Value'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Profiles = mongoose.model('Profile', ProfileSchema, 'accounts');

  Pokemon = mongoose.model('Pokemon', PokemonSchema);
}

export const dbContext = new DbContext()
