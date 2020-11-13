<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-2 mb-3">
          Lista de Juguetes
        </h1>
      </v-col>
    </v-row>
    <v-simple-table class="d-flex justify-center">
      <thead>
        <tr>
          <th class="text-left">
            Código
          </th>
          <th class="text-left">
            Nombre
          </th>
          <th class="text-left">
            Stock
          </th>
          <th class="text-left">
            Precio
          </th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in toysItems" :key="item.id">
          <td>{{ item.data.code }}</td>
          <td>{{ item.data.name }}</td>
          <td>{{ item.data.stock }}</td>
          <td>{{ item.data.price }}</td>
          <td>
            <v-btn color="success" @click.prevent="editToys(item)">
              Editar
            </v-btn>
          </td>
          <td>
            <v-btn color="warning" @click.prevent="deleteItem(item.id)">
              Eliminar
            </v-btn>
          </td>
        </tr>
      </tbody>
    </v-simple-table>
  </v-container>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex';
export default {
  name: "tableToys",

  data() {
    return {
      toysItems: null,
      
    };
  },
   created(){
     this.getToys()
  },
  computed:{
  ...mapState(["toy"]),
  },
  methods:{
    getToys(){
      axios.get(`https://us-central1-ottoklauss-5927c.cloudfunctions.net/api/toys`).then(response =>{
       this.toysItems = response.data
     })
    },
    deleteItem(idToy){
      axios.delete(`https://us-central1-ottoklauss-5927c.cloudfunctions.net/api/toys/${idToy}`).then(response => {
        this.getToys()
        console.log(response)
      })
    },
    editToys(item){
      console.log("tabla", item)
      const {
        code, name, price, stock,
      } = item.data
      this.$router.push({name: "editToy", params: {
        code, name, price, stock, id: item.id
      } })
    }
  }

};
</script>

<style></style>
