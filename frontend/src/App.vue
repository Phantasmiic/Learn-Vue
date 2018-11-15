<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MAdadadTERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <v-container>
      <router-view/>
      <ul>
        <li>
          <router-link :to="{ name: 'about', params: {} }">About</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'newpage', params: {} }">New Page</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'home', params: {} }">Home Page</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'joke', params: {} }">Get Joke</router-link>
        </li>
    

      </ul>


      </v-container>


    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import testComponent from "./components/testComponent";
import GetJoke from "./components/GetJoke";
import JokeTable from "./components/JokeTable";

//import { store } from './store.js';

export default {
  name: "App",
  components: {
    GetJoke,
    JokeTable
  },
  data() {
    return {
      //
    };
  }
};
</script>
