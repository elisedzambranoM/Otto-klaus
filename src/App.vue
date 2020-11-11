<template>
  <v-app>
    <v-app-bar
      app
      color="accent"
      dark
    >
      <div class="d-flex align-center">
        
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Cerrar Sesión</span>
        <v-icon>mdi-lock-open</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <loginPage/>
    </v-main>
  </v-app>
</template>

<script>
import loginPage from './components/loginPage';

export default {
  name: 'App',

  components: {
    loginPage,
  },

  data: () => ({
    //
  }),
};
</script>
