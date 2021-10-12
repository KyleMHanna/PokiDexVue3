<template>
  <div class="PokemonCard">
    <div class="card elevation-2">
      <div class="card-header ">
        <h1 class="text-center">
          {{ pokemon.data.name }}
        </h1>
        <h3>
          <img :src="pokemon.data.sprites.other['official-artwork'].front_default" alt="" class="img-fluid">
        </h3>
      </div>
      <div class="card-body scrollable-y" style="max-height:50vh;">
        <p>Height: {{ pokemon.data.height }} ft</p>
        <p>weight: {{ pokemon.data.weight }} lbs</p>
        <p>Base experience: {{ pokemon.data.base_experience }} </p>
        <p>{{ pokemon.data.stats.map(s => s.stat.name) }}</p>
        <p>{{ pokemon.data.stats.map(s => s.base_stat) }}</p>
      </div>
      <div class="card-footer text-center">
        <button
          @click="catchPokemon(pokemon.data, pokemon.data.Id)"

          class="btn rounded-pill text-danger"
        >
          Catch
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { pokemonService } from '../services/PokemonService.js'
export default {
  props: {
    pokemon: { type: Object, required: true }
  },
  setup(props) {
    return {
      async catchPokemon(pokemon, Id) {
        pokemonService.catchPokemon(pokemon, Id)
      }
    }
  }
}
</script>

<style>

</style>
