<template>
  <span>
    <GetJoke />
    <PrintJoke />
  </span>
</template>

<script>
  import GetJoke from '../components/GetJoke'
  import PrintJoke from '../components/PrintJoke'

  export default {
    components: {
      GetJoke,
      PrintJoke
    }
  }
</script>
