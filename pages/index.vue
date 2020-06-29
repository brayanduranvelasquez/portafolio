<template>
  <main>
    <div class="inicio">
      <div class="inicio__nombre">
        <p>Brayan Durán Velásquez</p>
      </div>

      <div class="inicio__descripcion">
        <p class="inicio__descripcion--encabezado">Desarrollador Web</p>

        <p class="inicio__descripcion--contenido">¡Actualmente aprendiendo cada vez más, sobre el desarrollo web. Estudiante de informática, autodidacta y comprometido con avanzar mucho más!</p>
      </div>

      <div class="inicio__redes-sociales">
        <a href="https://facebook.com/BrayanDuranVelasquez" target="__blank">
          <img src="@/assets/icons/facebook.png">
        </a>

        <a href="https://instagram.com/brayandvelasquezzz" target="__blank">
          <img src="@/assets/icons/instagram.png">
        </a>

        <a href="https://github.com/BrayanDVelasquez" target="__blank">
          <img src="@/assets/icons/github.png">
        </a>

        <a href="https://www.linkedin.com/in/brayan-d-velásquez-51bbb91a8/" target="__blank">
          <img src="@/assets/icons/linkedin.png">
        </a>
      </div>
    </div>
  </main>
</template>

<script>

  export default {
    head(){
      return {
        title: 'Inicio'
      }
    }
  };

</script>

<style lang="scss" scoped>
  
  main {
    width: 100%;
    min-height: calc(100vh - 76px);
    height: auto;
    position: relative;
    font-size: 16px;
    padding: 20px;

    .inicio {
      position: absolute;
      margin: auto;
      top: -50px;
      bottom: 0;
      right: 0;
      left: 0;
      width: 90%;
      max-width: 620px;
      height: 300px;
      padding: 20px;
      border-left: 3px solid #fff;

      &__nombre {
        font-size: 3.12em // 50px;
      }

      &__descripcion {

        &--encabezado {
          font-size: 2.5em; // 40px
          color: #ddd;
        }

        &--contenido {
          margin-top: 10px;
          text-align: center;
          font-size: 1.25em; // 20px;
          font-style: italic;
        }
      }

      &__redes-sociales {
        margin-top: 20px;
        display: flex;
        flex-direction: row;
        justify-content: center;

        img {
          margin: 0 7px;
          width: 45px;
          height: 45px;
          transition: all 0.5s;

          &:hover {
            cursor: pointer;
            transform: scale(1.1);
          }
        }
      }
    }
  } // Entre 680px a 1100px

  @media screen and (min-width: 1100px){
    main {
      font-size: 22px;

      .inicio {
        height: 360px;
        max-width: 850px;

        &__redes-sociales {
          img {
            width: 65px;
            height: 65px;
          }
        }
      }
    }
  }

  @media screen and (max-width: 680px){
    main {

      .inicio {
        height: 290px;
        max-width: 450px;

          &__nombre {
          font-size: 36px;
        }
      }

    }
  }

  @media screen and (max-width: 584px){
    main {
      font-size: 14px;

      .inicio {
        height: 290px;
        width: 95%;

        &__nombre {
          font-size: 32px;
        }
      }

    }
  }

  @media screen and (max-width: 420px) {
      main {

        .inicio {
          width: 95%;
          height: 220px;

          &__nombre {
            font-size: 22px;
          }

          &__descripcion {

            &--encabezado {
              font-size: 20px;
            }

            &--contenido {
              font-size: 1em;
            }

          }

          &__redes-sociales {
            margin-top: 15px;

            img {
              width: 30px;
              height: 30px;

            }
          }

        }

      }
  }

  @media screen and (max-height: 435px){
    main {
      display: block;
      min-height: none;

      .inicio {
        position: relative;
        top: 0;
      }
    }
  }
  
</style>