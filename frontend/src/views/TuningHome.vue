<template>
  <span>
    <v-container>
      <GetJoke />
      <PrintJoke />
      <JokeTable/>
    </v-container>

  </span>
</template>

<script>
  import GetJoke from '../components/GetJoke'
  import PrintJoke from '../components/PrintJoke'
  import JokeTable from '../components/JokeTable'


  export default {
    components: {
      GetJoke,
      PrintJoke,
      JokeTable
    }
  }
</script>
