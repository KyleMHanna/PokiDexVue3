<template>
  <div class="card-container">
    <div class="pokemon-container">
      <div class="power-level text-dark">
        CP: <span>{{ pokemon.data.base_experience }}</span>
        <div class="pokemon-snap">
          <img :src="pokemon.data.sprites.other['official-artwork'].front_default" alt="" class="img-fluid">
        </div>
        <div class="half-circle"></div>
      </div>
      <div class="poke-card">
        <div class="name">
          <h1> {{ pokemon.data.name }}</h1><span>#{{ pokemon.data.id }}</span>
          <div class="hp">
            HP {{ pokemon.data.stats[1].base_stat }}
          </div>
        </div>
        <ul class="stats">
          <li><span>Type</span><br /><span>{{ pokemon.data.types[0].type.name }}</span></li>
          <li><span>Weight</span><br /><span>{{ pokemon.data.weight }} kg </span></li>
          <li><span>Height</span><br /><span>{{ pokemon.data.height }}m</span></li>
        </ul>
        <div class="info">
          <!-- <p v-if="pokemon.data">
            {{ pokemon.data.abilities[1].ability.name }}
          </p> -->
          <ul class="abilities">
            <li>
              {{ pokemon.data.abilities[0].ability.name }}<br />
              <span>{{ pokemon.data.types[0].type.name }}</span>

              <span class="power"> {{ pokemon.data.stats[2].base_stat }} </span>

              <ul class="super">
              </ul>
            </li>
          </ul>
        </div>
        <div class="transfer">
          <button class="button text-dark"
                  @click="catchPokemon(pokemon.data, pokemon.data.Id)"
          >
            Catch
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { pokemonService } from '../services/PokemonService.js'
import Pop from '../utils/Pop.js'

export default {
  props: {
    pokemon: { type: Object, required: true }
  },
  setup(props) {
    return {

      async catchPokemon(pokemon, Id) {
        try {
          pokemonService.catchPokemon(pokemon, Id)
          Pop.toast('Pokemon successfully caught!', 'success')
        } catch (error) {
          Pop.toast(error, 'Pokemon ran')
        }
      }

    }
  }
}
</script>

<style lang="scss" scoped>
@import 'https://fonts.googleapis.com/css?family=Open+Sans:300,400,600';
$btn-green: #A2DB95;
$btn-blue: #24CCAA;
$primary: #436a6b;
$muted: #757575;
$powerupbg: #e9f0e1;
$gengar-light: #736c9e;
$gengar-dark: #434278;

* {
  box-sizing: border-box;
}

html, body {
  width: 100%;
  min-height: 100%;
  margin: 0;
  padding: 0;
  font-size: 16px;
  font-family: 'Open Sans';
}

@mixin linearGradient($dir, $clr1, $clr2) {
  background: linear-gradient($dir, $clr1, $clr2);
}

body {
  width: 100%;
  @include linearGradient(to top, darken($gengar-light, 10%), darken($gengar-dark, 25%));
}

.card-container {
  width: 600px;
  margin: 25px auto 0;

  .pokemon-container {
    position: relative;
    width: 100%;
    color: #fff;

    .power-level {
      position: relative;
      width: 100%;
      height: 200px;
      text-align: center;
      font-size: 1em;
      line-height: 1;

      span {
        font-size: 1.5em;
      }

      .pokemon-snap {
        position: absolute;
        width: 300px;
        top: 35px;
        left: 25%;
        z-index: 3;
        img {
          width: 65%;
        }
      }

      .half-circle {
        position: absolute;
        top: 65px;
        left: 20%;
        width: 60%;
        height: 400px;
        border-left: 2px solid rgba(34, 197, 42, 0.3);
        border-top: 2px solid rgba(34, 197, 42, 0.3);
        border-right: 2px solid rgba(34, 197, 42, 0.3);
        border-radius: 100%;
        z-index: 1;
      }

    }

    .poke-card {
      position: relative;
      width: 65%;
      min-height: 400px;
      margin: 15px auto;
      padding: 25px 15px;
      color: $primary;
      background: #f2f2f2;
      border-radius: 8px;
      z-index: 2;

      .name {
        text-align:  center;
        h1 { margin: 0; }

        .hp {
          position: relative;
          margin: 15px 0 0;
          font-weight: 600;
          &:before {
            position: absolute;
            top: -8px;
            left: 50%;
            width: 50%;
            height: 5px;
            @include linearGradient(to right, $btn-green, $btn-blue);
            border-radius: 3px;
            content: ' ';
            transform: translateX(-50%);
          }
        }

      }

      .stats {
        display: block;
        width: 100%;
        margin: 0;
        padding: 0;
        border-bottom: 1px solid #ccc;
        list-style-type: none;
        &:after {
          display: table;
          clear: both;
          content: ' ';
        }
        li {
          display: block;
          float: left;
          width: 33.333333%;
          margin: 10px 0;
          padding: 0 8px;
          font-size: .85em;
          font-weight: 600;
          text-align: center;
          border-right: 1px solid #ccc;
          &:last-child {
            border-right: none;
          }
          span {
            color: $muted;
            font-size: .75em;
          }
        }
      }

      .info {
        margin: 15px 0;
        padding: 0 8px;
        font-weight: 600;
        line-height: 1;
        border-bottom: 1px solid #ccc;

        .dusty-candy {
          text-align: center;
          span {
            color: $muted;
            font-size: .75em;
            text-transform: uppercase;
          }
          &:after {
            display: table;
            clear: both;
            content: ' ';
          }
          .dust {
            float: left;
            width: 50%;
            i {
              display: inline-block;
              width: 5px;
              height: 20px;
              background: linear-gradient(to bottom, rgba(151,189,204,1) 0%, rgba(151,189,204,1) 9%, rgba(194,240,237,1) 10%, rgba(194,240,237,1) 50%, rgba(217,171,255,1) 51%, rgba(136,95,194,1) 97%, rgba(151,189,204,1) 98%, rgba(151,189,204,1) 100%);
              content: ' ';
            }
          }
          .candy {
            float: left;
            width: 50%;
            i {
              display: inline-block;
              width: 15px;
              height: 15px;
              background: #736c9e;
              border-radius: 100%;
            }
          }
        }

        .power-up {
          width: 100%;
          height: 50px;
          margin: 15px 0;
          background: $powerupbg;

          .stardust, .candy {
            display: inline-block;
            width: 5px;
            height: 20px;
            margin: 0 0 0 15px;
            content: ' ';
          }

          .stardust {
            background: linear-gradient(to bottom, rgba(151,189,204,1) 0%, rgba(151,189,204,1) 9%, rgba(194,240,237,1) 10%, rgba(194,240,237,1) 50%, rgba(217,171,255,1) 51%, rgba(136,95,194,1) 97%, rgba(151,189,204,1) 98%, rgba(151,189,204,1) 100%);
          }

          .candy {
            width: 20px;
            background: #736c9e;
            border-radius: 50%;
          }

        }

        .abilities {
          position: relative;
          display: block;
          margin: 0;
          padding: 0;
          list-style-type: none;
          li {
            width: 100%;
            span {
              color: $muted;
              font-size: .85em;
            }
            .power {
              position: absolute;
              top: 5px;
              right: 0;
              color: $primary;
              font-size: 1em;
            }
          }
        }

      }

      .abilities {
        position: relative;
        display: block;
        width: 100%;
        margin: 0;
        padding: 0;
        list-style-type: none;
        border-bottom: 1px solid #ccc;
        li {
          position: relative;
          width: 100%;
          padding: 0 0 8px;
          font-weight: 600;
          span {
            color: $muted;
            font-weight: 400;
          }
          .power {
            position: absolute;
            top: 5px;
            right: 0;
            color: $primary;
          }
          .super {
            position: absolute;
            top: 0;
            left: 55px;
            list-style-type: none;
            li {
              display: inline-block;
              width: 35px;
              height: 8px;
              border: 2px solid #b5daff;
              border-radius: 15px;
              @include linearGradient(to bottom, #47b3ff, #54dff7);
              content: ' ';
            }
          }
        }
      }

      .caught {
        padding: 10px 0;
        color: $muted;
        font-size: .75em;
        font-weight: 600;
        text-align: center;
        border-bottom: 1px solid #ccc;

        .map {
          position: relative;
          display: block;
          width: 75%;
          height: 150px;
          margin: 10px auto 0;
          background: #4bd1a0;
          &:after {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 75px;
            height: 75px;
            border: 1px solid #fff;
            border-radius: 100%;
            transform: translate(-50%, -50%);
            content: ' ';
          }
        }

      }

      .transfer .button {
        display: block;
        margin: 20px auto 0;
        font-size: 1em;
        font-weight: 600;
      }

    }

  }

  .button {
    position: relative;
    display: inline-block;
    width: 150px;
    padding: 15px 0;
    @include linearGradient(to right, $btn-green, $btn-blue);
    background-size: 105%;
    background-position: -1px;
    border: 1px solid transparent;
    border-radius: 50px;
    color: rgba(255, 255, 255, .5);
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 1px;
    cursor: pointer;
  }

}

</style>
