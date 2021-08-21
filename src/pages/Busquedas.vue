<template>
  <div class="content">
    <h1 class="ml-4 pt-4">Busquedas</h1>
    <input class="ml-4"
      type="text"
      placeholder="Código del juego"
      :value="$store.state.busquedaPorCodigo"
      @input="$store.commit('SET_BUSQUEDA', $event.target.value)"
    />
    <br>
    <ul class="result">
      <li class="mt-2"
        v-for="juego in $store.getters.productosFiltrados"
        :key="juego.codigo"
        :style="{ backgroundColor: juego.color }"
      >
        {{ juego.codigo }} | {{ juego.nombre }} | {{ juego.stock }} |
        {{ juego.precio }}
      </li>
    </ul>
    <!-- <JuegosConStock /> -->
    <Listado />
  </div>
</template>

<script>
import Listado from "@/components/Listado.vue";
//import JuegosConStock from "@/components/JuegosConStock.vue";

export default {
  name: "BusquedasPage",
  components: {
    //JuegosConStock,
    Listado,
  },
};
</script>

<style scoped>
.content{
  width: 90%;
}
.result {
  width: 90%;
}
</style>
