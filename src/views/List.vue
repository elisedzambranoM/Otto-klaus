<template>
  <div class="text-center mt-5">
    <v-btn @click.prevent="goToCreate"
      rounded
      color="primary"
      dark
    >
     Agregar Juguete
    </v-btn>
    <tableToys></tableToys>
  </div>
</template>


<script>
import tableToys from '../components/tableToys.vue'
export default {
   name: "list",
   
  components: { tableToys },

  methods:{
    goToCreate (){
      this.$router.push("/newToy")
    }
  },
 
  
}
</script>