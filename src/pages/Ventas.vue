<template>
  <div>
    <h1 class="pt-4 ml-4">Ventas</h1>
    <JuegosConStock />
    <!-- <Listado /> -->
    <ul>
      <li v-for="(juego, index) in cantidadDeJuegosConStock" :key="index">
        <label for="">{{ juego.nombre }} | ${{ juego.precio }} | stock: {{ juego.stock }}</label> |
        <input type="button" value="Vender" @click="vender(juego)">
      </li>
    </ul>
  </div>
</template>

<script>
import JuegosConStock from '../components/JuegosConStock.vue';
//import Listado from "@/components/Listado.vue";
import { mapGetters, mapState, mapActions } from 'vuex'
export default {
    name: "Ventas",
    components: { 
      JuegosConStock,
      //Listado
    },
    methods: {
      ...mapActions(['modificarOcupado', 'simularOcupado', 'vender']),

      vender(juego){
        //console.log(juego)
        this.$store.dispatch('vender', juego)
      }
    },
    computed: mapState({
      ...mapGetters([
        'cantidadDeJuegosConStock',
      ]),
      ...mapState({
        ocupado: (state) => {
          return state.ocupado ? 'Ocupado' : 'Disponible'
        },
        totalVentas: (state) => {
          return `Total: $${state.totalVentas}`
        }
      }),
    }),
}

</script>

<style>
.content{
  width: 90%;
}
</style>
