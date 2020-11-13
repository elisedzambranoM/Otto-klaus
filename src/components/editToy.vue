<template>
  <v-container>
    <v-form>
      <v-row class="text-center">
        <v-col class="mb-4">
          <h1 class="display-2 mb-3">
            Editar Juguete
          </h1>
        </v-col>
      </v-row>
      <v-row class="d-flex justify-center">
        <v-col cols="12" sm="6" md="3">
          <v-text-field label="Código" v-model="toyToEdit.code"></v-text-field>
          <v-text-field label="Nombre del Producto" v-model="toyToEdit.name"></v-text-field>
          <v-text-field label="Stock" v-model="toyToEdit.stock"></v-text-field>
          <v-text-field label="Precio" v-model="toyToEdit.price"></v-text-field>
          <v-row justify="center">
            <v-dialog v-model="dialog" persistent max-width="290">
              <template v-slot:activator="{ on, attrs }">
                <v-btn class="mb-5" rounded color="primary" dark v-bind="attrs" v-on="on">
                  Editar Juguete
                </v-btn>
                <v-btn
                  @click.prevent="goToListPage"
                  rounded
                  color="error"
                  dar
                  class="ml-2"
                >
                  Regresar a la Lista
                </v-btn>
              </template>
              <v-card>
                <v-card-title class="headline">
                 CONFIRMACIÓN
                </v-card-title>
                <v-card-text
                  >¿estas seguro que deseas editar el juguete</v-card-text
                >
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="green darken-1" text @click="editToyOnServer">
                    Aceptar
                  </v-btn>
                  <v-btn color="green darken-1" text @click="resetForm">
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
import axios from 'axios'
export default {
    name: "editToyForm",

  data() {
    return {
      dialog: false,
      toyToEdit: null,
    };
  },

  methods: {
    goToListPage() {
      this.$router.push("/list");
    },
    editToyOnServer(){
        console.log(this.toyToEdit.code)
        console.log(this.toyToEdit.name)
        console.log(this.toyToEdit.stock)
        console.log(this.toyToEdit.price)
        this.dialog = false
        axios.put(`https://us-central1-ottoklauss-5927c.cloudfunctions.net/api/toys/${this.toyToEdit.id}`, this.toyToEdit).then((response) =>{
        console.log(response)
        this.$router.push("/list");
        })
    },
    resetForm(){
        this.newToy.code = null
        this.newToy.name = null
        this.newToy.stock = null
        this.newToy.price = null
        this.dialog = false
    }
  },
  created(){
      console.log("query", this.$route.params) 
      this.toyToEdit = this.$route.params
  }
};
</script>

<style></style>