<template>
    <div class="tarjeta">

        <div class="tarjeta__cuerpo">
            <div v-if="!imgCargada">
                <cargador></cargador>
            </div>

            <div v-else>
                <img :src="url" alt="Captura de pantalla">
            </div>
        </div>

        <div class="tarjeta__pie">

            <div class="tarjeta__pie-titulo">
                <p> {{ titulo }} </p>
            </div>

            <div class="tarjeta__pie-descripcion">
    
                <p> {{ descripcion }} </p><br>

                <div class="tarjeta__pie-descripcion-extra">

                    {{ extra }}

                </div>
            </div>

            <div class="tarjeta__pie-boton">
                <a :href="ruta" target="__blank"><button>Ir al sitio</button></a>
            </div>

        </div> <!-- .tarjeta__pie-descripcion -->
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
            extra: String,
            ruta: String
        },

        data(){
            return {
                imgCargada: false,
                url: null
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
        background: white;
        font-size: 16px;
        margin: 20px 10px;

        &__cuerpo {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 150px;
            background-color: rgb(231, 231, 231);

            img {
                width: 100%;
                height: 151px;
            }
        }

        &__pie {
            color: #000;

            &-titulo {
                min-height: 55px;
                font-size: 1.1em;
                padding: 15px;
                text-align: center;
                font-weight: bold;
            }

            &-descripcion {
                padding: 0 10px;
                max-height: 140px;
                min-height: 140px;
                text-align: center;
            }

            &-boton {
                width: 100%;

                a {
                    button {
                        width: 100%;
                        padding: 15px 0px;
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
</style>