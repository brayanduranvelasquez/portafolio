<template>
    <main class="container">
        <div class="portafolio">
            <div class="portafolio__titulo">
                <p>Portafolio</p>
            </div>

            <div class="portafolio__tarjetas">
                <tarjeta
                    v-for="tarjeta of tarjetas" :key="tarjeta.titulo"
                    :nombreImg="tarjeta.img"
                    :titulo="tarjeta.titulo"  
                    :descripcion="tarjeta.descripcion" 
                    :extra="tarjeta.extra"
                    :repositorio="tarjeta.repositorio"
                    :ruta="tarjeta.ruta"
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
               title: 'Portafolio',       
            }
       },
       data(){
            return{
                tarjetas: [
                    {
                        img: 'AppDeNotas.jpg',
                        titulo: 'App De Notas',
                        descripcion: 'Aplicacion web para guardar sus notas, usando la memoria interna de su navegador. Diseño adaptivo, con soporte PWA y cuenta con Modo Nocturno.',
                        extra: ['HTML', 'CSS', 'JAVASCRIPT', 'SASS', 'NUXTJS'],
                        repositorio: 'https://github.com/brayanduranvelasquez/app-de-notas/',
                        ruta: 'http://brayanduranvelasquez.github.io/app-de-notas/'
                    },
                    {
                        img: 'QueEsMinecraft.jpg',
                        titulo: 'Página Estática',
                        descripcion: 'Representacion de una página web estática moderna con un encabezado, un contenido principal, un menu lateral y un pie de página.',
                        extra: ['HTML', 'CSS', 'BULMACSS', 'SASS'],
                        repositorio: 'https://github.com/brayanduranvelasquez/que-es-minecraft/',
                        ruta: 'http://brayanduranvelasquez.github.io/que-es-minecraft/'
                    },
                    {
                        img: 'AdivinaElNumero.jpg',
                        titulo: 'Adivina El Número',
                        descripcion: 'Mini-juego donde la computadora generará un número secreto del 1 al 50, por el cual cuentas con un máximo 5 intentos para adivinarlo.',
                        extra: ['HTML', 'CSS', 'JAVASCRIPT', 'SASS'],
                        repositorio: 'https://github.com/brayanduranvelasquez/adivina-el-numero',
                        ruta: 'http://brayanduranvelasquez.github.io/adivina-el-numero/'
                    },
                    {
                        img: 'login_1.jpg',
                        titulo: 'Inicio de Sesión',
                        descripcion: 'Diseño de un inicio de sesión (conocido como Login), con validaciones para cada dato que se introduzca en los respectivos campos ya sea, el nombre, apellido, etc.',
                        extra: ['HTML', 'CSS', 'JAVASCRIPT'],
                        repositorio: 'https://github.com/brayanduranvelasquez/login-1/',
                        ruta: 'http://brayanduranvelasquez.github.io/login-1/'
                    },
                    {
                        img: 'FormValidacion.jpg',
                        titulo: 'Formulario Dinámico',
                        descripcion: 'Formulario de registro. A medida que va introduciendo los datos, va mostrando si cumple con lo requerido.',
                        extra: ['HTML', 'CSS', 'JAVASCRIPT', 'BULMACSS', 'VUEJS'],
                        repositorio: 'https://github.com/brayanduranvelasquez/Formulario_ValidacionesConVueJs/',
                        ruta: 'http://brayanduranvelasquez.github.io/Formulario_ValidacionesConVueJs/'
                    },
                    {
                        img: 'login_2.jpg',
                        titulo: 'Inicio de Sesión',
                        descripcion: 'Diseño de un inicio de sesión (conocido como Login), con validaciones para cada dato que se introduzca en los respectivos campos ya sea, el nombre, apellido, etc.',
                        extra: ['HTML', 'CSS', 'JAVASCRIPT', 'BOOTSTRAP'],
                        repositorio: 'https://github.com/brayanduranvelasquez/login-2/',
                        ruta: 'http://brayanduranvelasquez.github.io/login-2/'
                    }
                ]
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
            flex-wrap: wrap;
        } 
    }
</style>