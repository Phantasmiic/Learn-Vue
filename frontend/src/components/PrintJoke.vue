<template>

    
    <div>
        <div> THE JOKE IS:</div>
        <div> {{ this.$store.getters.getJoke }} </div>
    </div>

</template>

<script>
    export default {
        data() {
            return {}
        }
    }

</script>
