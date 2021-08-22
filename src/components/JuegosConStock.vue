<template>
  <div class="content">
      <h3 class="ml-4">Juegos  con stock: {{$store.getters.cantidadDeJuegosConStock.length}}</h3>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.content{
  width: 90%;
}
</style>