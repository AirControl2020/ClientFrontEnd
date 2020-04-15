<template>
  <v-container>
    <v-card-title>
      <v-icon color="indigo" class="mr-12" size="64">mdi-hydraulic-oil-temperature</v-icon>
      <v-row align="start">
        <div>
          <span class="display-2 font-weight-black" v-text="123"></span>
          <span>℃</span>
        </div>
      </v-row>
      <v-spacer />
      <v-icon :color="['grey' ,'grey', 'indigo'][1]" class="mr-12" size="64">mdi-snowflake</v-icon>
      <v-icon
        :color="['grey' ,'red lighten-2', 'grey'][1]"
        class="mr-12"
        size="64"
      >mdi-white-balance-sunny</v-icon>
      <v-icon :color="['black' ,'grey', 'grey'] [1]" class="mr-12" size="64">mdi-weather-windy</v-icon>
    </v-card-title>

    <v-sheet color="transparent">
      <v-sparkline
        :smooth="16"
        :gradient="['#f72047', '#ffd200', '#1feaea']"
        :line-width="3"
        :value="t"
        auto-draw
        stroke-linecap="round"
      ></v-sparkline>
    </v-sheet>
  </v-container>
</template>

<script>
//TODO: add hash for t as key
//TODO: add store impl
//TODO: add temp api
export default {
  data: () => ({
    t: [44, 44, 123, 123, 34, 123, 54, 54, 2, 432, 213]
  }),

  methods: {}
};
</script>
