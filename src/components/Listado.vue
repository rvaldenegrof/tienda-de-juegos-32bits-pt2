<template>
  <div class="content">
    <hr>
    <h2 class="ml-4">Listado de Juegos</h2>
    <ul>
      <li
        v-for="juego in $store.state.juegos"
        :key="juego.codigo"
        :style="{ backgroundColor: juego.color }"
      >
        {{ juego.codigo }} | {{ juego.nombre }} | {{ juego.stock }} |
        {{ juego.precio }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Listado",
};
</script>

<style scoped>
.content{
  width: 100%;
}
</style>
