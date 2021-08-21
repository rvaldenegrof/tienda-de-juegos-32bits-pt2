<template>
  <div>
    <h1 class="pt-4 ml-4">Ventas</h1>
    <JuegosConStock />
    <Listado />
  </div>
</template>

<script>
import JuegosConStock from '../components/JuegosConStock.vue'
import Listado from "@/components/Listado.vue";
export default {
  name: "Ventas",
  components: { 
    JuegosConStock,
    Listado
  },
};
</script>

<style></style>
