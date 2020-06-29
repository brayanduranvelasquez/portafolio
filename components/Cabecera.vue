<template>
    <header>
        <nav class="nav">
            <div class="nav__logo">
                <p>Brayan</p>
            </div>

            <div class="nav__enlaces">
                <nuxt-link to="/">
                    <button @click="navegar('index')">Inicio</button>
                </nuxt-link>

                <nuxt-link to="/sobre-mi">
                    <button @click="navegar('sobre-mi')">Sobre mí</button>
                </nuxt-link>

                <nuxt-link to="/portafolio">
                    <button @click="navegar('portafolio')">Portafolio</button>
                </nuxt-link> 
            </div>
        </nav>
    </header>
</template>

<script>
    export default {
        name: "Cabecera",
        methods: {
            navegar(ruta){
                if(this.$route.name != ruta){
                    this.$nuxt.$loading.start();
                }

            }
        }
    }
</script>

<style lang="scss">
    .nav {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        font-size: 16px;
        padding: 20px 25px;

        &__logo {
            font-size: 1.87em;
            cursor: default;
        }

        &__enlaces {

            a{
                text-decoration: none;

                button {
                    border: none;
                    background: none;
                    text-decoration: none;
                    font-size: 1.37em;
                    margin-left: 0.75em;
                    color: #ccc;
                    transition: all 0.5s;
                    outline: none;

                    &:hover {
                        color: #fff;
                        cursor: pointer;
                    }
                }
                
                
            }

            a.nuxt-link-exact-active {
                button {
                    outline: none;
                    color: #fff;
                    border-bottom: solid 2px #fff;
                    cursor: default;
                }
                
            }
            
        }
    }

    @media screen and (max-width: 448px) {
        .nav {
            flex-direction: column;
            justify-content: center;
            font-size: 14px;

            &__logo {
                margin-bottom: 8px;
            }
            
            &__enlaces {
                display: flex;
                justify-content: center;
            }
        }
    }

    @media screen and (max-width: 350px) {
        .nav {
            font-size: 12px;
        }
    }
</style>