<template>
  <v-container>
    <v-card-title>
      <v-icon color="indigo" class="mr-12" size="64">mdi-hydraulic-oil-temperature</v-icon>
      <v-row align="start">
        <div>
          <span class="display-2 font-weight-black" v-text="temp[19]"></span>
          <span>℃</span>
        </div>
      </v-row>
      <v-spacer />
      <v-icon :color="['black' ,'grey', 'grey'] [mode]" class="mr-12" size="64">mdi-weather-windy</v-icon>
      <v-icon
        :color="['grey' ,'red lighten-2', 'grey'][mode]"
        class="mr-12"
        size="64"
      >mdi-white-balance-sunny</v-icon>
      <v-icon :color="['grey' ,'grey', 'indigo'][mode]" class="mr-12" size="64">mdi-snowflake</v-icon>
    </v-card-title>

    <v-sheet color="transparent">
      <v-sparkline
        :smooth="16"
        :gradient="['#f72047', '#ffd200', '#1feaea']"
        :line-width="3"
        :value="temp"
        auto-draw
        stroke-linecap="round"
      ></v-sparkline>
      {{temp}}
    </v-sheet>
  </v-container>
</template>

<script>
import router from "../router";
import store from "../store";
export default {
  data: () => ({}),
  computed: {
    temp() {
      return this.$store.getters.temperture;
    },
    mode() {
      return this.$store.getters.mode;
    }
  },
  methods: {}
};
</script>
