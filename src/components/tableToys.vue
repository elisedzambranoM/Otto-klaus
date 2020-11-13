<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-2 mb-3">
          Listado de Juguetes
        </h1>
      </v-col>
    </v-row>
    <v-simple-table>
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
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in toysItems" :key="item.id">
          <td>{{ item.codigo }}</td>
          <td>{{ item.nombre }}</td>
          <td>{{ item.stock }}</td>
          <td>{{ item.precio }}</td>
        </tr>
      </tbody>
    </v-simple-table>
  </v-container>
</template>

<script>
export default {
  name: "table",

  data (){
    return{
      toysItems: [
        {
        codigo: "A0001",
        nombre: "Ironman",
        stock: 100,
        precio: 20000,
        },
        {
        codigo: "A0002",
        nombre: "Wonder woman",
        stock: 100,
        precio: 20000,
        },
        
      ]
    }
  }
};
</script>

<style></style>
