<template>
    <main class="container">

        <div class="portafolio">
            <div class="portafolio__titulo">
                <p>Lo que he publicado</p>
            </div>

            <div class="portafolio__tarjetas">
                <tarjeta
                    nombreImg="QueEsMinecraft.jpg"
                        titulo="Página Estática Moderna"  
                            descripcion="Representacion de una página web estática moderna con un encabezado, un contenido principal, un menu lateral y un pie de página." 
                                extra="HTML - CSS - BULMACSS - SASS"
                                    ruta="https://brayandvelasquez.github.io/QueEsMinecraft/"
                ></tarjeta>
                <tarjeta
                    nombreImg="AdivinaElNumero.jpg"
                        titulo="Adivina el Numero"  
                            descripcion="Mini-juego donde la computadora generará un número secreto del 1 al 50, tienes 5 intentos para adivinarlo." 
                                extra="HTML - CSS - JS"
                                    ruta="https://brayandvelasquez.github.io/AdivinaElNumero/"
                ></tarjeta>
                <tarjeta
                    nombreImg="FormValidacion.jpg"
                        titulo="Formulario dinámico"  
                            descripcion="Formulario de registro. A medida que va introduciendo los datos, va mostrando si cumple con lo requerido." 
                                extra="HTML - CSS - VUEJS - BULMACSS"
                                    ruta="https://brayandvelasquez.github.io/Formulario_ValidacionesConVueJs/"
                ></tarjeta>

            </div>
        </div>

    </main>
</template>

<script>
    import Tarjeta from '@/components/Tarjeta.vue';

    export default {
       components: {
           Tarjeta
       },
       head(){
           return {
               title: 'Portafolio'
           }
       }
    }
</script>

<style lang="scss" scoped>
    .portafolio {
        margin: 10px 0;
        font-size: 16px;
        min-height: 100vh;

        &__titulo {
            border-left: 3px white solid;

            p { 
                margin-left: 10px;
                padding: 20px 10px;
                font-size: 2.10em;
            }
            
        }

        &__tarjetas {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
        }
        
    }
</style>