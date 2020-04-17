<template>
  <v-container fill-height fluid>
    <v-layout class="d-flex justify-center align-center">
      <v-row class="d-flex justify-center align-center">
        <v-progress-circular :size="70" :width="7" color="purple" indeterminate></v-progress-circular>
        <v-card-text class="d-flex justify-center align-center loadingTxt">{{info}}</v-card-text>
      </v-row>
    </v-layout>
  </v-container>
</template>
</template>

<script>
export default {
  mounted() {
    this.$http
      .get("ping")
      .then(res => {
        if (res.data.code != 0)
          this.$router.push({ name: "err", params: { why: res.data.msg } });
        else {
          this.info = "Connected";
          setTimeout(() => {
            this.$router.push({ name: "home" });
          }, 2000);
        }
      })
      .catch(res => {
        this.$router.push({ name: "err", params: { why: res } });
      });
  },
  data: () => ({
    info: "Connect to Host"
  })
};
</script>
<style scoped>
</style>