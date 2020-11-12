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
        <tr v-for="item in desserts" :key="item.name">
          <td>{{ item.name }}</td>
          <td>{{ item.calories }}</td>
        </tr>
      </tbody>
    </v-simple-table>
  </v-container>
</template>

<script>
export default {
  name: "table",
};
</script>

<style></style>
