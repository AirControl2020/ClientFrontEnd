<template>
  <v-dialog v-model="dialog" width="500">
    <v-card>
      <v-card-title class="headline grey lighten-2" primary-title>Set Temperture</v-card-title>

      <v-card-text>114514</v-card-text>

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
    dialog: false
  }),
  methods: {
    close() {
      this.dialog = false;
    },
    set() {
      this.dialog = false;
    }
  }
};
</script>