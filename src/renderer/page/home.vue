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
      <v-icon color="grey" class="mr-12" size="64" @click="gao">mdi-power-settings</v-icon>

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

    <div>
      <span class="title font-regular">Preset:{{preset}}</span>
      <span>℃</span>
    </div>
    <v-spacer />
    <div>
      <span class="title font-regular">Cost:{{cost}}</span>
      <span>￥</span>
    </div>
    <div>
      <span class="title font-regular">{{["Off","On"][on]}}</span>
    </div>

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
  data: () => ({
    on: 0
  }),
  computed: {
    temp() {
      return this.$store.getters.temperture;
    },
    mode() {
      return this.$store.getters.mode;
    },
    preset() {
      return this.$store.getters.preset;
    },
    cost() {
      return this.$store.getters.cost;
    }
  },
  methods: {
    turn(mode) {
      if (this.mode != mode) {
        this.$http
          .post("mode", { mode: mode })
          .then(res => {
            if (res.data.code == 0) {
              this.$store.dispatch("turn", mode);
              this.setTemp(mode);
            }
          })
          .catch(res => {
            alert(res);
          });
      } else {
        this.setTemp(mode);
      }
    },
    gao() {
      this.$http
        .post("on", {})
        .then(res => {
          if (res.data.code != 0) {
            alert("failed");
          } else {
            this.on ^= 1;
          }
        })
        .catch(res => {
          alert(res);
        });
    },
    setTemp(mode) {
      if (mode == 0) {
        this.$store.dispatch("set", 25);
      } else if (mode == 1) {
        this.$refs.selector.L = 25;
        this.$refs.selector.R = 30;
        this.$refs.selector.dialog = true;
        console.log(this.$refs);
      } else if (mode == 2) {
        this.$refs.selector.L = 18;
        this.$refs.selector.R = 25;
        this.$refs.selector.dialog = true;
      }
    }
  }
};
</script>
