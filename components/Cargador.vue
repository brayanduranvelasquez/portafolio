<template>
    <div class="cargador"> 
    </div>
</template>

<script>
    export default {
       name: "Cargador" 
    }
</script>

<style lang="scss">
    .cargador {
        border-top: 2px solid white;
        border-top-color: rgba(255, 255, 255, 0.4);
        border-bottom: 2px solid rgb(141, 141, 141);
        border-left: 2px solid rgb(141, 141, 141);
        border-right: 2px solid rgb(141, 141, 141);
        border-radius: 50%;
        padding: 20px;
        width: 10px;
        height: 10px;
        animation: cargador-animacion .8s infinite linear; 
    }

    @keyframes cargador-animacion {
        from {
            transform: rotate(0); 
        }
        to {
            transform: rotate(360deg); 
        } 
    }
</style>