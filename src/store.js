import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    busquedaPorCodigo: "",
    carritoDeCompras: [],
    totalVentas: 0,
    juegos: [
      {
        codigo: "0001",
        nombre: "Sekiro",
        stock: 100,
        precio: 30000,
        color: "red",
        destacado: true,
      },
      {
        codigo: "0002",
        nombre: "Fifa 21",
        stock: 100,
        precio: 25000,
        color: "blue",
        destacado: false,
      },
      {
        codigo: "0003",
        nombre: "Gears of War 4",
        stock: 100,
        precio: 15000,
        color: "green",
        destacado: true,
      },
      {
        codigo: "0004",
        nombre: "Mario Tennis Aces",
        stock: 100,
        precio: 35000,
        color: "yellow",
        destacado: false,
      },
      {
        codigo: "0005",
        nombre: "Bloodborne",
        stock: 100,
        precio: 10000,
        color: "blue",
        destacado: false,
      },
      {
        codigo: "0006",
        nombre: "Forza Horizon 4",
        stock: 100,
        precio: 20000,
        color: "red",
        destacado: true,
      },
    ],
  },
  getters: {
    productosFiltrados(state) {
      return state.juegos.filter(
        (juego) => juego.codigo === state.busquedaPorCodigo
      );
    },
    cantidadDeJuegosConStock: state =>{
      return state.juegos.filter((juego) => juego.stock > 0);
    },
    carrito(state){
      return console.log(state.carritoDeCompras);
    }
  },
  mutations: {
    SET_BUSQUEDA(state, value) {
      state.busquedaPorCodigo = value;
    },
    SUBSTRACT_STOCK(state, juego){
      console.log(juego)
      state.juegos.forEach((p) => {
        if(p.codigo === juego.codigo && juego.stock > 0){
          juego.stock --
        }
      }) 
      //state.juegos[productIndex].stock -= 1;

    }, 
    ADD_VENTAS(state, juego) {
      state.carritoDeCompras.push(juego);
    },

    actualizarTotal(state, juego){
      state.totalVentas += juego.precio
    },


  },
  actions: {
    modificarOcupado(context){
      context.commit('modificarOcupado')
    },
    async vender({ /* commit, state,   */dispatch }, juego){
      await dispatch('procesarVenta', juego).then(() => {
        //console.log(juego)
        alert('Venta procesada exitósamente')
      }).catch(() => {
        alert('Venta rechazada. No hay stock o el producto no existe')
      })
      dispatch('actualizarTotal', juego)
    },
    async procesarVenta({commit, state}, juego){
      return new Promise((resolve, reject) => {
        let tiempoEjecucion = Math.floor((Math.random() * 2000) + 1)
        setTimeout(() => {
          let resultado = false;
          state.juegos.forEach((p) => {
            if(p.codigo == juego.codigo && p.stock > 0){
              commit('SUBSTRACT_STOCK', juego)
              commit("ADD_VENTAS", { ...juego, stock: 1 });
              resultado = true
            }
          })
          if(resultado)
              resolve()
          else
              reject()
        }, tiempoEjecucion);
      })
    },
    actualizarTotal({ commit }, juego){
      return new Promise((/* resolve, reject */) => {
        let tiempoEjecucion = Math.floor((Math.random() * 1000) + 1)
        setTimeout(() => {
          commit('actualizarTotal', juego)
        }, tiempoEjecucion);
      })
    },

  },
});

export default store;
