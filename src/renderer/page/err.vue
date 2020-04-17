<template>
  <v-container fill-height fluid class="loader">
    <v-layout class="d-flex justify-center align-center">
      <v-row class="d-flex justify-center align-center">
        <v-icon size="64" class="mr-12" color="red">mdi-emoticon-sad</v-icon>
        <v-card-text class="d-flex justify-center align-center">
          <h1>{{this.$route.params.why}}</h1>
        </v-card-text>
      </v-row>
    </v-layout>
  </v-container>
</template>
</template>

<script>
export default {};
</script>
<style scoped>
</style>