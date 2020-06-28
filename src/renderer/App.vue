<template>
  <v-app>
    <v-content>
      <v-container>
        <v-card-title>
          <v-icon color="indigo" class="mr-12" size="64">mdi-hydraulic-oil-temperature</v-icon>
          <v-row align="start">
            <div>
              <span class="display-2 font-weight-black" v-text="this.t"></span>
              <span>℃</span>
            </div>
          </v-row>
          <v-spacer />
          <v-icon :color="get1()" class="mr-12" size="64" @click="shutdown()">mdi-power-settings</v-icon>
          <v-icon :color="get2()" class="mr-12" size="64" @click="turn(1)">mdi-white-balance-sunny</v-icon>
          <v-icon :color="get3()" class="mr-12" size="64" @click="turn(-1)">mdi-snowflake</v-icon>
        </v-card-title>
        <v-row>
          <v-select class="mx-4" v-model="speed" :items="item" label="风速" style="width: 30px"></v-select>
          <v-text-field
            v-model="preset"
            class="mx-4"
            label="Preset"
            max="50"
            min="1"
            step="1"
            style="width: 30px"
            type="number"
          ></v-text-field>
          <v-col>
            <span class="title font-regular">Cost:{{cost}}</span>
          </v-col>
          <v-col>
            <div>
              <span class="title font-regular">Status:{{["Off","On"][on]}}</span>
            </div>
          </v-col>
        </v-row>
        <v-sheet color="transparent">
          <v-sparkline
            :smooth="16"
            :gradient="['#f72047', '#ffd200', '#1feaea']"
            :line-width="3"
            :value="temperture"
            auto-draw
            stroke-linecap="round"
          ></v-sparkline>
          {{temperture}}
        </v-sheet>
      </v-container>
    </v-content>
  </v-app>
</template>    


<script>
export default {
  name: "ClientFrontEnd",
  created() {
    this.temperture = new Array(20).fill(25);
    setInterval(() => {
      let js = { idx: this.idx };
      this.$http.post("getStatus", JSON.stringify(js)).then(res => {
        console.log(res.data.msg);
        this.t = res.data.msg.curtemp;

        let jb = this.temperture.slice(1);
        jb.push(res.data.msg.curtemp);
        this.temperture = jb;
        this.cost = res.data.msg.price;
      });
    }, 5000);
  },
  data: () => ({
    on: 0,
    idx: 301,
    cost: 0,
    preset: 25,
    speed: "中",
    mode: 0,
    temperture: null,
    t: 25,
    item: ["低", "中", "高"],
    L: 25,
    R: 25
  }),
  computed: {},
  methods: {
    get1() {
      if (this.mode == 0) return "black";
      else return "grey";
    },
    get2() {
      if (this.mode == 1) return "red lighten-2";
      else return "grey";
    },
    get3() {
      if (this.mode == -1) return "indigo";
      else return "grey";
    },
    turn(mode) {
      this.mode = mode;
      let speedjxch = 0;
      if (this.speed == "低") {
        speedjxch = 1;
      } else if (this.speed == "中") {
        speedjxch = 2;
      } else if (this.speed == "高") {
        speedjxch = 3;
      }
      if (0 == this.on) {
        let js = { room_id: this.idx, kind: 0, temp: -1, speed: -1, mode: -1 };
        this.$http
          .post("switchMode", JSON.stringify(js))
          .then(res => {
            this.on = 1;
            let js = {
              room_id: this.idx,
              kind: 1,
              temp: this.preset,
              speed: speedjxch,
              mode: this.mode == 1 ? 1 : -1
            };
            this.$http
              .post("switchMode", JSON.stringify(js))
              .then(res => {
                console.log(res);
              })
              .catch(res => {
                alert(res);
              });
          })
          .catch(res => {
            alert(res);
          });
      } else {
        let js = {
          room_id: this.idx,
          kind: 1,
          temp: this.preset,
          speed: speedjxch,
          mode: this.mode == 1 ? 1 : -1
        };
        this.$http
          .post("switchMode", JSON.stringify(js))
          .then(res => {
            console.log(res);
          })
          .catch(res => {
            alert(res);
          });
      }
      this.setTemp(this.mode);
    },
    shutdown() {
      let js = { room_id: this.idx, kind: 2, temp: -1, speed: -1, mode: -1 };
      this.$http
        .post("switchMode", JSON.stringify(js))
        .then(res => {
          this.mdoe = 0;
          this.on = 0;
          console.log(res);
          this.L = this.R = 25;
        })
        .catch(res => {
          alert(res);
        });
    },
    setTemp(mode) {
      if (mode == 1) {
        this.L = 25;
        this.R = 30;
      } else if (mode == 2) {
        this.L = 18;
        this.R = 25;
      }
    }
  }
};
</script>
