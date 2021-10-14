<template>
  <div id="moving-background" class="moving-background"></div>

  <div class="p-card psychic col-md-4">
    <div class="character-area">
      <img class="character img-fluid" :src="pokemon.sprites.other['official-artwork'].front_default" alt="" />
    </div>
    <div class="details text-center">
      <h1>{{ pokemon.name }}</h1>

      <li>{{ pokemon.abilities[0].ability.name }}</li>
    </div>
    <ul class="stats">
      <li>
        <span>Type</span>
        <h5>{{ pokemon.types[0].type.name }}</h5>
      </li>
      <li><span>HP</span><h5>{{ pokemon.stats[5].base_stat }}</h5></li>
      <li>
        <h5>
          <button class="btn-btn rounded-pill text-danger text-center"
                  @click="ReleasePokemon(pokemon._id)"
          >
            Release
          </button>
        </h5>
      </li>
    </ul>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { pokemonService } from '../services/PokemonService.js'
import { AppState } from '../AppState.js'
import Pop from '../utils/Pop.js'
export default {
  props: {
    pokemon: { type: Object, required: true }
  },
  setup(props) {
    return {
      myPokemon: computed(() => AppState.myPokemon),

      async ReleasePokemon(Id) {
        try {
          pokemonService.releasePokemon(Id)
          Pop.toast('Pokemon successfully released!', 'success')
        } catch (error) {
          Pop.toast(error, 'Could not release Pokemon')
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.p-card {
position: relative;
width: 300px;
height: 500px;
background-color: #fff;border-radius: 5px;
margin: 30px 10px;
color: #333;
}

/* Character Area */
.p-card > .character-area > img.character {
position: absolute;
height: 300px;
top: -30px;
left: 50%;
transform: translate(-50%);
}
.p-card > .character-area {
width: 100%;height: 225px;
background-size: cover;
background-position: center;
border-top-left-radius: 5px;
border-top-right-radius: 5px;
}

/* Card Details */
.p-card > .details {
padding: 0 10px;
margin-top: 40px;
}
.p-card > .details > span { text-transform: uppercase; }

/* Card Stats */
.p-card > .stats {
position: absolute;
bottom: 0;
left: 0;
width: 100%;
list-style-type: none;
padding: 0;
margin: 0;
border-bottom-left-radius: 5px;
border-bottom-right-radius: 5px;
}
.p-card > .stats > li {
display: inline-block;
width: 33.3333%;
text-align: center;
font-size: 14px;
padding: 5px 0;
color: #fff;
}
.p-card > .stats > li > h5 { margin: 0; }
.p-card > .stats > li:hover { background-color: #fff5; }
.p-card > .stats > li:first-of-type {border-right: 1px solid #333;
border-bottom-left-radius: 5px;
margin-right: -5px;
}
.p-card > .stats > li:last-of-type {
margin-left: -5px;
border-left: 1px solid #333;
border-bottom-right-radius: 5px;
}

/* Hover Effects */
.p-card:hover > .character-area { height: 235px; }
.p-card:hover > .character-area > img.character {
  height: 330px;
  top: -45px;
}
.p-card:hover > .details { margin-top: 30px; }

/* Mewtwo */
.p-card.psychic { box-shadow: 0 0 25px rgba(190, 100, 255, 0.55); }
.p-card.psychic:hover { box-shadow: 0 5px 35px rgba(190, 100, 255, 1); }
.p-card.psychic > .details > span { color: #93c; }
.p-card.psychic > .character-area { background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/2940219/Psychic.png'); }
.p-card.psychic > .stats {
background: #8e2de2;
background: -webkit-linear-gradient(to right, #4a00e0, #8e2de2);
background: linear-gradient(to right, #4a00e0, #8e2de2);
}

/* Fonts */
.display-3,
.details > h3 { font-family: 'Quicksand' !important; }
.lead,
.details > span,
.details > p,
.stats > li { font-family: 'Rajdhani' !important; }

</style>
