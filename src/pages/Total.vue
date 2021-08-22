<template>
  <div class="pt-4 ml-4">
    <h1 class="">Total</h1>
     <p><label for="" v-text="totalVentas"></label></p>
     <!-- <h3 v-text="carritoDeCompras"></h3> -->
     <ul>
        <li v-for="(c, index) in carrito" :key="index">
        <label for="">{{ c.nombre }} | ${{ c.precio }}</label>
      </li>
     </ul>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
export default {
    name: "Ventas",
    components: { },
    methods: {},
    computed: mapState({
      ...mapGetters([
        'carrito',
      ]),
      ...mapState({
        totalVentas: (state) => {
          return `Total: $${state.totalVentas}`
        },
        carritoDeCompras: (state) => {
          return `${state.carritoDeCompras}`
        }
      }),
    }),
};
</script>

<style></style>
