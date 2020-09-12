<template>
    <div class="tarjeta">
        <div class="tarjeta__cuerpo">

            <div class="tarjeta-brillo" v-if="tarjetaBrillo">
                <!-- Permite que cuando el usuario coloque el puntero por encima de "ir al sitio", la tarjeta se iluminara, como efecto a que esta siendo elegina -->
            </div>

            <div class="tarjeta__cuerpo-img">
                <div v-if="!imgCargada">
                    <!-- Si la imagen aun no ha sido cargada completamente, se mostrara un cargador (CSS) -->
                    <cargador></cargador>
                </div>

                <div v-else>
                    <img :src="url" alt="Captura de pantalla">
                </div>
            </div>

            <div class="tarjeta__cuerpo-titulo">
                <p> {{ titulo }} </p>
            </div>

            <div class="tarjeta__cuerpo-descripcion">
                <p> {{ descripcion }} </p><br>
            </div>

            <div class="tarjeta__cuerpo-extra">
                <img
                    v-for="name of extra"
                    :key="name"
                    :src="require(`@/assets/icons/lenguajes_frameworks/${name}.png`)"
                >
            </div>

            <div class="tarjeta__cuerpo-enlace-repositorio">
                <a :href="repositorio" target="_blank">Repositorio</a>
            </div>
        
        </div>

        <div class="tarjeta__pie" @mouseover="brillo" @mouseout="normalizar">
            <div class="tarjeta__pie-boton">
                <a :href="ruta" target="__blank"><button>Ir al sitio</button></a>
            </div>
        </div>
    </div>
</template>

<script>
    import Cargador from "./Cargador.vue";
    import { mapState, mapMutations } from "vuex";

    export default {
        name: "Tarjeta",
        components: {
            Cargador
        },

        props: {
            nombreImg: String,
            titulo: String,
            descripcion: String,
            extra: Array,
            repositorio: String,
            ruta: String
        },

        data(){
            return {
                imgCargada: false,
                url: null,

                tarjetaBrillo: false // Para efecto de seleccionado 
            }
        },

        computed: {
            ...mapState(['tarjetasCargadas'])
        },

        methods: {
            ...mapMutations(['agregarTarjetaCargada']),

            cargandoImagen(){
                let imagen = new Image();
                imagen.src = require('@/assets/screenshots_web/' + this.nombreImg);
                this.url = imagen.src;

                imagen.onload = () => {
                    this.imgCargada = true;
                    this.agregarTarjetaCargada(this.nombreImg);
                }
            },

            brillo(){
                this.tarjetaBrillo = true;
            },

            normalizar(){
                this.tarjetaBrillo = false;
            }
        },

        mounted(){
            // Si la imagen no esta cargada, debe pasar al else
            if(this.tarjetasCargadas.includes(this.nombreImg)) {
                let imagen = new Image();
                imagen.src = require('@/assets/screenshots_web/' + this.nombreImg);
                this.imgCargada = true;
                this.url = imagen.src;
            } else {
                this.cargandoImagen();
            }
        }
    }
</script>

<style lang="scss">
    .tarjeta {
        min-width: 280px;
        max-width: 280px;
        font-size: 16px;
        margin: 20px 10px;
        border-radius: 0px 0px 12px 12px;
        overflow: hidden;
        background: transparent;
        
        &__cuerpo {
            color: #000;
            position: relative;
            background: white;

            &-img {
                display: flex;
                align-items: center;
                justify-content: center;
                height: 125px;
                background-color: rgb(231, 231, 231);

                img {
                    width: 100%;
                    height: 151px;
                }
            }

            &-titulo {
                min-height: 55px;
                font-size: 1.1em;
                padding: 20px;
                text-align: center;
                font-weight: bold;
            }

            &-descripcion {
                padding: 0 10px;
                max-height: 100px;
                min-height: 100px;
                text-align: center;
            }

            &-extra {
                padding: 4px 6px;
                min-height: 34px;
                text-align: center;

                img {
                    padding: 0 1px;
                    width: 28px;
                }
            }

            &-enlace-repositorio{
                text-align: right;
                padding-bottom: 12px;
                padding-right: 16px;
            }
        }

        &__pie {
            background: transparent;

            &-boton {
                width: 100%;
                cursor: pointer;
                overflow: hidden;

                a {
                    button {
                        width: 100%;
                        padding: 16px 0px;
                        font-size: 1.2em;
                        background: rgb(12, 138, 255);
                        color: #fff;
                        border: none;
                        transition: 0.3s all;
                        
                        &:hover {
                            background: rgb(99, 179, 255);
                            cursor: pointer;
                        }
                    }
                }

            }
        }
    }

    .tarjeta-brillo {
        animation-name: brillo;
        animation-duration: 0.3s;
        animation-fill-mode: forwards;
        width: 100%;
        height: 100%;
        position: absolute;
    }

    @keyframes brillo {
        from{
            background: rgba(255, 255, 255, 0);
        }

        to{
            background: rgba(255, 255, 255, 0.603);
        }
    }
</style>