<template>
  <div class="container-fluid">
    <div class="row justify-content-center">
      <MyPokemonCard v-for="p in myPokemon" :key="p.id" :pokemon="p" />
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'

import { AppState } from '../AppState.js'
import { useRoute } from 'vue-router'

import { pokemonService } from '../services/PokemonService.js'
export default {

  setup() {
    const route = useRoute()
    onMounted(() => {
      pokemonService.getMyPokemon()
    })
    return {
      route,
      myPokemon: computed(() => AppState.myPokemon)

    }
  }
}
</script>
<style lang="scss" scoped>

</style>
