<template>
  <v-dialog v-model="dialog" width="500">
    <v-card>
      <v-card-title class="headline grey lighten-2" primary-title>Set Temperture</v-card-title>
      <v-container fill-height fluid>
        <v-row class="d-flex justify-center align-center">
          <v-card-title class="display-4">{{current}}</v-card-title>
        </v-row>
        <v-row class="d-flex justify-center align-center">
          <v-btn icon x-large @click="current=Math.max(L,current-1)">
            <v-icon color="indigo">mdi-arrow-down-bold</v-icon>
          </v-btn>
          <v-btn icon x-large @click="current=Math.min(R,current+1)">
            <v-icon color="red lighten-2">mdi-arrow-up-bold</v-icon>
          </v-btn>
        </v-row>
      </v-container>
      <v-divider></v-divider>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" text @click="close()">Cancel</v-btn>
        <v-btn color="primary" text @click="set()">OK</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  data: () => ({
    L: 25,
    R: 25,
    dialog: false,
    current: 25
  }),
  methods: {
    close() {
      this.dialog = false;
    },
    set() {
      this.$http
        .post("temp", { temp: this.current })
        .then(res => {
          if (res.data.code == 0) {
            this.$store.dispatch("set", this.current);
          }
        })
        .catch(res => {
          alert(res);
        });
      this.dialog = false;
    }
  }
};
</script>