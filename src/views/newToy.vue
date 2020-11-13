<template>
    <v-container >
  <v-form >
      <v-row class="text-center">
        <v-col class="mb-4">
          <h1 class="display-2 mb-3">
            Crear nuevo juguete
          </h1>
        </v-col>
      </v-row>
      <v-row class="d-flex justify-center">
        <v-col cols="12" sm="6" md="3">
          <v-text-field label="Código"></v-text-field>
          <v-text-field label="Nombre del Producto"></v-text-field>
          <v-text-field label="Stock"></v-text-field>
          <v-text-field label="Precio"></v-text-field>
          <v-btn @click.prevent="goToCreate" rounded color="primary" dark>
            Agregar Juguete
          </v-btn>
          <v-btn @click.prevent="goToListPage" rounded color="error" dar class="ml-10">
            Regresar a la Lista
          </v-btn>
        </v-col>
      </v-row>
  </v-form>
    </v-container>
</template>

<script>
export default {
  name: "newToy",

  methods:{
    goToListPage (){
      this.$router.push("/list")
    }
  }
};
</script>

<style></style>
