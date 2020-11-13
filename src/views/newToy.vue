<template>
  <v-container>
    <v-form>
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
          <v-row justify="center">
            <v-dialog v-model="dialog" persistent max-width="290">
              <template v-slot:activator="{ on, attrs }">
                <v-btn rounded color="primary" dark v-bind="attrs" v-on="on">
                  Agregar Juguetes
                </v-btn>
                <v-btn
                  @click.prevent="goToListPage"
                  rounded
                  color="error"
                  dar
                  class="ml-10"
                >
                  Regresar a la Lista
                </v-btn>
              </template>
              <v-card>
                <v-card-title class="headline">
                 CONFIRMACIÓN
                </v-card-title>
                <v-card-text
                  >¿Desea agregar un nuevo juguete</v-card-text
                >
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="green darken-1" text @click="saveToys">
                    Aceptar
                  </v-btn>
                  <v-btn color="green darken-1" text @click="dialog = false">
                    Cancelar
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-row>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
export default {
  name: "newToy",

  data() {
    return {
      dialog: false,
    };
  },

  methods: {
    goToListPage() {
      this.$router.push("/list");
    },
    saveToys(){
        console.log("aqui conectar con api")
        this.$router.push("/list");
    }
  },
};
</script>

<style></style>
