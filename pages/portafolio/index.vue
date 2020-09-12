<template>
    <main class="container">

        <div class="portafolio">
            <div class="portafolio__titulo">
                <p>Portafolio</p>
            </div>

            <div class="portafolio__tarjetas">
                <tarjeta
                    nombreImg="AppDeNotas.jpg"
                        titulo="App De Notas"  
                            descripcion='Aplicacion web para guardar sus notas, usando la memoria interna de su navegador. Diseño adaptivo, con soporte PWA y cuenta con Modo Nocturno.'
                                :extra="['html', 'css', 'js', 'sass', 'nuxt']"
                                        repositorio="https://github.com/brayanduranvelasquez/app-de-notas/"
                                            ruta="http://brayanduranvelasquez.github.io/app-de-notas/"
                ></tarjeta>
                <tarjeta
                    nombreImg="QueEsMinecraft.jpg"
                        titulo="Página Estática"  
                            descripcion="Representacion de una página web estática moderna con un encabezado, un contenido principal, un menu lateral y un pie de página."
                                :extra="['html', 'css', 'bulma', 'sass']"
                                    repositorio="https://github.com/brayanduranvelasquez/que-es-minecraft/" 
                                        ruta="http://brayanduranvelasquez.github.io/que-es-minecraft/"
                ></tarjeta>
                <tarjeta
                    nombreImg="AdivinaElNumero.jpg"
                        titulo="Adivina El Número"  
                            descripcion="Mini-juego donde la computadora generará un número secreto del 1 al 50, por el cual cuentas con un máximo 5 intentos para adivinarlo." 
                                :extra="['html', 'css', 'js', 'sass']"
                                    repositorio="https://github.com/brayanduranvelasquez/adivina-el-numero"
                                        ruta="http://brayanduranvelasquez.github.io/adivina-el-numero/"
                ></tarjeta>
                <tarjeta
                    nombreImg="login_1.jpg"
                        titulo="Inicio de Sesión"  
                            descripcion="Diseño de un inicio de sesión (conocido como Login), con validaciones para cada dato que se introduzca en los respectivos campos ya sea, el nombre, apellido, etc."
                                :extra="['html', 'css', 'js']"
                                    repositorio="https://github.com/brayanduranvelasquez/login-1/"
                                        ruta="https://brayanduranvelasquez.github.io/login-1/"
                ></tarjeta>
                <tarjeta
                    nombreImg="FormValidacion.jpg"
                        titulo="Formulario Dinámico"  
                            descripcion="Formulario de registro. A medida que va introduciendo los datos, va mostrando si cumple con lo requerido." 
                                :extra="['html', 'css', 'js', 'bulma', 'vue']"
                                    repositorio="https://github.com/brayanduranvelasquez/Formulario_ValidacionesConVueJs/"
                                        ruta="https://brayanduranvelasquez.github.io/Formulario_ValidacionesConVueJs/"
                ></tarjeta>
                <tarjeta
                    nombreImg="login_2.jpg"
                        titulo="Inicio de Sesión"  
                            descripcion="Diseño de un inicio de sesión (conocido como Login), con validaciones para cada dato que se introduzca en los respectivos campos ya sea, el nombre, apellido, etc."
                                :extra="['html', 'css', 'js', 'bootstrap']"
                                    repositorio="https://github.com/brayanduranvelasquez/login-2/"
                                        ruta="https://brayanduranvelasquez.github.io/login-2/"
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