<template>

  <v-tabs
    color="cyan"
    dark
    slider-color="yellow"
    centered  
  >
    <v-tab >
      Jokes
    </v-tab>
    <v-tab ripple>
      Item 2
    </v-tab>

    <v-tab ripple>
      Stick In
    </v-tab>

    <v-tab-item>
      <v-container>

          <v-card flat>
            <v-card-text>
              <GetJoke />
              <PrintJoke />
              <JokeTable/>
            </v-card-text>
          </v-card>

      </v-container>

    </v-tab-item>

    <v-tab-item>  
      <v-container>

            <v-card flat>
              <v-card-text>
  
              </v-card-text>
            </v-card>

        </v-container>
    </v-tab-item>  
    <v-tab-item>  
      <v-container>

            <v-card flat>
              <v-card-text>
                Test Stick 1
              </v-card-text>
            </v-card>

        </v-container>
    </v-tab-item>  
  </v-tabs>

  
</template>
<script>
import GetJoke from "../components/GetJoke";
import PrintJoke from "../components/PrintJoke";
import JokeTable from "../components/JokeTable";

export default {
  components: {
    GetJoke,
    PrintJoke,
    JokeTable
  }
};
</script>
