<template>
  <v-app>
    <v-app-bar app color="accent" dark>
      <div class="d-flex align-center"></div>
      <v-spacer></v-spacer>
      <v-btn v-if="currentUser" @click="logout" text>
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
import firebase from "firebase";
import { mapActions, mapState } from "vuex";

export default {
  name: "App",

  components: {
    loginPage,
  },

  methods: {
    ...mapActions(["updateCurrentUser"]),
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          // Sign-out successful.
          this.updateCurrentUser(null);
          console.log("Sign-out successful");
        })
        .catch((error) => {
          // An error happened.
          console.log(error);
        });
    },
  },
  computed:{
    ...mapState(["currentUser"]),
  },
};
</script>
