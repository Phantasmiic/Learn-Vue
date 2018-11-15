<template>
  <span>
    <testComponent />
    <p> {{ this.$store.state.joke }} </p>
  </span>
</template>

<script>
import testComponent from "../components/testComponent";

export default {
  components: {
    testComponent
  }
};
</script>
