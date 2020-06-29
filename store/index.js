export const state = () => ({
    // Se iran agregando el nombre de todas las imagenes de las tarjetas que se hayan cargado, para no mostrar el cargador cuando la imagen ya este en la cache
    tarjetasCargadas: []
})

export const mutations = {
    agregarTarjetaCargada(state, img){
        state.tarjetasCargadas.push(img)
    }
}