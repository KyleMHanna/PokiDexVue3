<template>
  <nav class="navbar navbar-expand-lg navbar-warning bg-warning px-3 pokemonBackround text-center">
    <router-link class="navbar-brand d-flex" :to="{ name: 'Home' }">
      <div class="d-flex flex-column align-items-center">
        <!-- <img
          alt="logo"
          src="https://png.pngitem.com/pimgs/s/2-25253_pokemon-pikachu-free-png-image-pokemon-mastermind-of.png"
          height="45"
        /> -->
        <div class="box">
        </div>
      </div>
    </router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarText"
      aria-controls="navbarText"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon" />
    </button>

    <ul class="navbar-nav me-auto">
      <li>
        <router-link :to="{ name: 'MyPokemon' }" class="selectable text-uppercase">
          <h1 class="text-dark custom">
            PokiDex
          </h1>
          <img src="https://ih1.redbubble.net/image.733115337.2227/flat,1000x1000,075,f.jpg" alt="" height="75">
          <!-- <button class="btn-btn rounded-pill text-danger">
              PokiDex
            </button> -->
        </router-link>
      </li>
    </ul>
    <span class="navbar-text">
      <button
        class="btn selectable text-success lighten-30 text-uppercase my-2 my-lg-0"
        @click="login"
        v-if="!user.isAuthenticated"
      >
        Login
      </button>

      <div class="dropdown my-2 my-lg-0" v-else>
        <div
          class="dropdown-toggle selectable"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          id="authDropdown"
        >
          <img
            :src="user.picture"
            alt="user photo"
            height="40"
            class="rounded"
          />
          <span class="mx-3 text-success lighten-30">{{ user.name }}</span>
        </div>
        <div
          class="dropdown-menu p-0 list-group w-100"
          aria-labelledby="authDropdown"
        >
          <router-link :to="{ name: 'Account' }">
            <div class="list-group-item list-group-item-action hoverable">
              Manage Account
            </div>
          </router-link>
          <div
            class="list-group-item list-group-item-action hoverable text-danger"
            @click="logout"
          >
            <i class="mdi mdi-logout"></i>
            logout
          </div>
        </div>
      </div>
    </span>
  </nav>
</template>

<script>
import { AuthService } from '../services/AuthService'
import { AppState } from '../AppState'
import { computed } from 'vue'
export default {
  setup() {
    return {
      user: computed(() => AppState.user),
      async login() {
        AuthService.loginWithPopup()
      },
      async logout() {
        AuthService.logout({ returnTo: window.location.origin })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
.custom{
font-family: 'Press Start 2P', cursive;
}
.dropdown-menu {
  user-select: none;
  display: block;
  transform: scale(0);
  transition: all 0.15s linear;
}
.dropdown-menu.show {
  transform: scale(1);
}
.hoverable {
  cursor: pointer;
}
a:hover {
  text-decoration: none;
}
.nav-link{
  text-transform: uppercase;
}
.navbar-nav .router-link-exact-active{
  border-bottom: 2px solid var(--bs-success);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
html,
body {
  width: 100%;
  height: 100%;
  margin: auto;
  padding: 0;
  text-align: center;
  background-color: #FFF;
}

.box {
  width: 125px;
  height: 125px;
  display: inline-block;
  margin: 20px;
  position: relative;
  border: 6px solid #ccc;
  border-radius: 50%;
  background-image: -moz-radial-gradient(40% 40%, circle, rgba(0, 0, 0, .1) 40%, rgba(0, 0, 0, 1) 100%), -moz-linear-gradient(-90deg, #f33 45%, #333 45%, #3f3f3f 50%, #333 55%, #FFF 55%);
  background-image: -webkit-radial-gradient(40% 40%, circle, rgba(0, 0, 0, .1) 40%, rgba(0, 0, 0, 1) 100%), -webkit-linear-gradient(-90deg, #f33 45%, #333 45%, #3f3f3f 50%, #333 55%, #FFF 55%);
}

.box1 {
  background-image: -moz-radial-gradient(40% 40%, circle, rgba(0, 0, 0, .1) 40%, rgba(0, 0, 0, 1) 100%), -moz-linear-gradient(-90deg, rgba(0, 0, 0, 0) 45%, #333 45%, #3f3f3f 50%, #333 55%, #FFF 55%), -moz-linear-gradient(0deg, #F79905 45%, #333 45%, #3f3f3f 50%, #333 55%, #F79905 55%);
  background-image: -webkit-radial-gradient(40% 40%, circle, rgba(0, 0, 0, .1) 40%, rgba(0, 0, 0, 1) 100%), -webkit-linear-gradient(-90deg, rgba(0, 0, 0, 0) 45%, #333 45%, #3f3f3f 50%, #333 55%, #FFF 55%), -webkit-linear-gradient(0deg, #F79905 45%, #333 45%, #3f3f3f 50%, #333 55%, #F79905 55%);
}

.box:before {
  content: "";
  display: block;
  position: absolute;
  z-index: 6;
  width: 20%;
  height: 20%;
  background-color: #FFF;
  border-radius: 50%;
  box-shadow: 0 0 0 1px #AAA, 0 0 0 10px #fff, 0 0 0 16px #3f3f3f;
  margin: 40%;
}

.box:after {
  content: "";
  display: block;
  position: absolute;
  z-index: 1;
  width: 94%;
  height: 10%;
  background-color: rgba(0, 0, 0, 0);
  margin: 45% 3%;
  box-shadow: 12px 0 0 #FFF, -12px 0 0 #FFF;
}
.pokemonBackround {
  background-image: url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/af2160ba-fd0f-4b68-8ad5-3c23d052cfc8/d72tpu2-52396e4e-9d27-42f3-bfee-db5b94936291.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2FmMjE2MGJhLWZkMGYtNGI2OC04YWQ1LTNjMjNkMDUyY2ZjOFwvZDcydHB1Mi01MjM5NmU0ZS05ZDI3LTQyZjMtYmZlZS1kYjViOTQ5MzYyOTEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ivKHklANKORZHnbZHoce7XgrNrVZIyKbUrFzKxIkAgM);
  background-size: 150vw;
  background-size: 100vh;
}

</style>
