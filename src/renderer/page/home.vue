<template>
  <v-container>
    <selector ref="selector" />
    <v-card-title>
      <v-icon color="indigo" class="mr-12" size="64">mdi-hydraulic-oil-temperature</v-icon>
      <v-row align="start">
        <div>
          <span class="display-2 font-weight-black" v-text="temp[19]"></span>
          <span>℃</span>
        </div>
      </v-row>
      <v-spacer />
      <v-icon
        :color="['black' ,'grey', 'grey'] [mode]"
        class="mr-12"
        size="64"
        @click="turn(0)"
      >mdi-weather-windy</v-icon>
      <v-icon
        :color="['grey' ,'red lighten-2', 'grey'][mode]"
        class="mr-12"
        size="64"
        @click="turn(1)"
      >mdi-white-balance-sunny</v-icon>
      <v-icon
        :color="['grey' ,'grey', 'indigo'][mode]"
        class="mr-12"
        size="64"
        @click="turn(2)"
      >mdi-snowflake</v-icon>
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
import selector from "./selector";
export default {
  components: { selector },
  data: () => ({}),
  computed: {
    temp() {
      return this.$store.getters.temperture;
    },
    mode() {
      return this.$store.getters.mode;
    }
  },
  methods: {
    turn(mode) {
      if (this.mode != mode) {
        this.$http
          .post("mode", { mode: mode })
          .then(res => {
            if (res.data.code == 0) {
              this.$store.dispatch("set", 25);
              if (mode != 0) {
                this.$refs.selector.dialog = true;
              }
            }
          })
          .catch(res => {
            alert(res);
          });
      } else {
        this.$store.dispatch("set", 25);
        if (mode != 0) {
          this.$refs.selector.dialog = true;
        }
      }
    }
  }
};
</script>
