<template>
    <main class="container">
        <div class="sobreMi">
            <div class="sobreMi__titulo">
                <p>Datos sobre mí</p>
            </div>

            <div class="sobreMi__contenedor">

                <div class="sobreMi__contenedor-img">
                    <img src="@/assets/perfil.jpg">
                </div>

                <div class="sobreMi__contenedor-nombre">
                    <p>Brayan Durán Velásquez</p>
                </div>

                <div class="divisor">
                    <hr>
                </div>

                <div class="sobreMi__contenedor-datos">
                    <div class="sobreMi__contenedor-datos-personales">
                        <div class="encabezado">
                            <p>Datos Personales</p>
                        </div>
                        
                        <div class="contenido">
                            <p><b>Edad</b>: 18 años.</p>
                            <p><b>Vivo en</b>: Maturín, Monagas, Venezuela.</p>
                        </div>                        
                    </div>

                    <div class="sobreMi__contenedor-datos-educacion">
                        <div class="encabezado">
                            <p>Educación</p>
                        </div>

                        <div class="contenido">
                            <p><b>Universidad Bolivariana de Venezuela</b></p>
                            <p>Informática para la Gestión Social</p>
                            <p>Actualmente estudiante activo en la universidad.</p>
                        </div>
                    </div>

                    <div class="sobreMi__contenedor-datos-contacto">
                        <div class="encabezado">
                            <p>Contacto</p>
                        </div>

                        <div class="contenido">
                            <p><b>Correo Electronico:</b> brayan13s133@gmail.com</p>
                            <p><b>WhatsApp:</b>
                                <a href="tel:+584249064449"> +584249064449</a>
                            </p>
                            <p><b>Facebook:</b> 
                                <a href="https://facebook.com/brayanduranvelasquez" target="__blank"> brayanduranvelasquez</a>
                            </p>
                            <p><b>Github:</b>
                                <a href="https://github.com/brayanduranvelasquez" target="__blank"> brayanduranvelasquez</a>
                            </p>
                            <p><b>LinkedIn:</b>
                                <a href="https://www.linkedin.com/in/brayanduranvelasquez" target="__blank"> brayanduranvelasquez</a>
                            </p>
                        </div>
                    </div>

                    <div class="sobreMi__contenedor-datos-habilidades">
                        <div class="encabezado">
                            <p>Habilidades</p>
                        </div>

                        <div clas="mensaje">Yo tengo conocimientos de como usar los siguientes lenguajes y frameworks:</div>

                        <div class="contenido">
                            <img 
                                src="@/assets/habilidades/html.png" 
                                title="Html" 
                                v-tooltip="{ content: 'HTML' }"
                            >
                            <img 
                                src="@/assets/habilidades/css.png" 
                                title="CSS"
                                v-tooltip="{ content: 'CSS' }"
                            >
                            <img 
                                src="@/assets/habilidades/js.png" 
                                title="Javascript"
                                v-tooltip="{ content: 'JavaScript' }"
                            >
                            <img 
                                src="@/assets/habilidades/php.png" 
                                title="Php"
                                v-tooltip="{ content: 'PHP' }"
                            >
                            <img 
                                src="@/assets/habilidades/mysql.png" 
                                title="Mysql"
                                v-tooltip="{ content: 'Mysql' }"
                            >
                            <img 
                                src="@/assets/habilidades/sass.png" 
                                title="Sass"
                                v-tooltip="{ content: 'Sass' }"
                            >
                            <img 
                                src="@/assets/habilidades/bootstrap.png" 
                                title="Bootstrap"
                                v-tooltip="{ content: 'Bootstrap' }"
                            >
                            <img 
                                src="@/assets/habilidades/bulma.png" 
                                title="Bootstrap"
                                v-tooltip="{ content: 'Bulma' }"
                            >
                            <img 
                                src="@/assets/habilidades/vue.png" 
                                title="Vuejs"
                                v-tooltip="{ content: 'Vuejs' }"
                            >
                            <img 
                                src="@/assets/habilidades/nuxt.png" 
                                title="Nuxtjs"
                                v-tooltip="{ content: 'Nuxtjs' }"
                            >
                        </div>
                    </div>
                </div> <!-- div.sobreMi__contenedor-datos -->
            </div> <!-- div.sobreMi__contenedor -->
        </div> <!-- div.sobreMi -->
    </main>
</template>

<script>
    export default {
        head(){
            return {
                title: 'Sobre mi'
            }
        }
    }
</script>

<style lang="scss">
    @import '~/plugins/vue-tooltips/styles.scss';

    main {
        min-height: 100vh;
    }
    
    .sobreMi {
        margin: 10px 0;
        font-size: 16px;
        

            &__titulo {
                border-left: 3px white solid;

                p { 
                    margin-left: 10px;
                    padding: 20px 10px;
                    font-size: 2.10em;
                }
                
            }

            &__contenedor {
                background-color: white;
                width: 85%;
                height: auto;
                padding: 20px;
                border-radius: 25px;
                margin: auto;
                margin-top: 10px;
                color: #000;

                &-img {
                    margin: auto;
                    background-color: rgb(223, 223, 223);
                    border-radius: 50%;
                    width: 180px;
                    height: 180px;

                    img {
                        border-radius: 50%;
                        width: 180px;
                        height: 180px;
                        transition: 1s all;
                        
                        &:hover {
                            transform: scale(1.1);
                        }
                    }
                }
                
                
                 &-nombre {
                    width: 100%;
                    text-align: center;
                    margin-top: 10px;

                    p {
                        text-align: center;
                        margin-top: 5px;
                        font-size: 2em;
                    }

                }

                &-datos {
                    width: 85%;
                    margin: auto;
                    padding-top: 10px;
                    font-size: 1.10em;

                    &-personales, &-educacion, &-contacto {
                        margin-bottom: 22px;

                        .encabezado {
                                font-size: 1.70em;
                                font-weight: 550;
                                margin-bottom: 4px;
                        }

                        .contenido {
                            margin-left: 14px;
                        }
                    } 

                    &-habilidades {

                        .encabezado {
                                font-size: 28px;
                                font-weight: 550;
                                margin-bottom: 4px;
                        }

                        .mensaje {
                                font-size: 18px;
                                margin-bottom: 6px;
                        }

                        .contenido {
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            flex-direction: row;
                            flex-flow: wrap;

                            img {
                                width: 48px;
                                margin: 5px;
                            }
                        }

                    }
                } // .sobreMi__contenedor-datos

            } // .sobreMi__contenedor

    } // .sobreMi

    .divisor {
        margin: 15px 0;

        hr {
            width: 75%;
            margin: auto;
        }
    }

    @media screen and (max-width: 584px){
        .sobreMi {
            font-size: 15px;

            &__contenedor {
                width: 92%;

                &-img {
                    width: 140px;
                    height: 140px;

                    img {
                        width: 140px;
                        height: 140px;
                    }
                }

                &-nombre {

                    p {
                        font-size: 1.8em;
                    }

                }

                &-datos {

                    &-habilidades {

                        .contenido {

                            img {
                                width: 40px;
                            }

                        }
                    }
                }
            }            
        }
    }

</style>