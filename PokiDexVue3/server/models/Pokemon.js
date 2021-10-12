import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const PokemonSchema = new Schema(
  {
    name: { type: String, required: true },
    Id: { type: Number, required: true },
    abilities: { type: Array, required: true },
    stats: { type: Array, required: true },
    types: { type: Array, required: true },
    sprites: { type: Object, required: true },
    ownerId: { type: String, ref: 'Account', required: true }

  },
  { timestamps: true, toJSON: { virtuals: true } }
)
PokemonSchema.virtual('owner', {
  localField: 'creatorId',
  foreignField: '_id',
  ref: 'Account',
  justOne: true
})
