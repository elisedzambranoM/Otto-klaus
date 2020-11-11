<template>
  <v-app>
    <v-app-bar app color="accent" dark>
      <div class="d-flex align-center"></div>

      <v-spacer></v-spacer>

      <v-btn
        @click="logout"
         text
      >
        <span class="mr-2">Cerrar Sesión</span>
        <v-icon>mdi-lock-open</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <loginPage />
    </v-main>
  </v-app>
</template>

<script>
import loginPage from "./components/loginPage";
import firebase from "firebase"

export default {
  name: "App",

  components: {
    loginPage,
  },

  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(function() {
          // Sign-out successful.
          console.log("Sign-out successful")
        })
        .catch(function(error) {
          // An error happened.
          console.log(error)
        });
    },
  },
};
</script>
