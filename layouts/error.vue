<template>
    <div class="pantalla">
    </div>
</template>

<script>
    export default {
        beforeCreate(){
            this.$router.push('/')
        }
    }
</script>

<style lang="scss">
    .pantalla {
        top: 0;
        z-index: 20000;
        position: fixed;
        width: 100%;
        height: 100vh;
        background: white;
    }
</style>