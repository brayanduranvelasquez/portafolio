<template>
  <div>
    <cabecera></cabecera>
    <Nuxt />
  </div>
</template>

<script>
  import Cabecera from '@/components/Cabecera.vue';

  export default {
    components: {
      Cabecera
    }
    
  }
</script>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    background-color: #121212;
    background-image: url('../assets/background/lg.jpg'); 
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
  }

  body {
    color: #FFF;
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;
  }

  .container {
    margin: auto;
    width: 95%;
    max-width: 1124px;
  }

  @media screen and (min-width: 1100px){
    html {
      background-image: url('../assets/background/extra.jpg'); 
    }
  }

  @media screen and (max-width: 680px){
    html {
      background-image: url('../assets/background/md.jpg'); 
    }
  }

  @media screen and (max-width: 584px){
    html {
      background-image: url('../assets/background/xs.jpg'); 
    }
  }
</style>