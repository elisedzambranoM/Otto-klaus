<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Inventario Jugueteria Otto Klaus
        </h1>
      </v-col>
    </v-row>
    <div class="text-center">
      <v-btn @click="signIn" color="accent" class="ma-7 white--text">
        <v-icon dark left>
          mdi-google
        </v-icon>
        Sign in with Google
      </v-btn>
    </div>
    <v-row justify="center">
      <v-img
        src="https://estaticos.serpadres.es/media/cache/1140x_thumb/uploads/images/article/5c77d9da5bafe846c43c98a3/ordenarjuguetes_0.jpg"
        max-width="500"
        max-height="300"
      >
      </v-img>
    </v-row>
  </v-container>
</template>

<script>
import firebase from "firebase";
import {mapActions} from "vuex"

export default {
  name: "loginPage",
 

  methods: {
    ...mapActions(["updateCurrentUser"]),
    signIn() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          const {
            user
          } = result
          const {
           displayName, email
          } = user
          this.updateCurrentUser({displayName, email})
         console.log(displayName, email)
        })
        .catch((error) => {
         console.log(error)
        });
    },
  },
};
</script>
