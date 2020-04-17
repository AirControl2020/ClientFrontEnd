const state = {
  mode: 0,
  temperture: new Array(20).fill(25),
  preset: 25,
}

const getters = {
  temperture(state) {
    return state.temperture;
  },
  mode(state) {
    return state.mode;
  },
  preset(state) {
    return state.preset;
  }
}

const mutations = {
  set_temp(state, temp) {
    let t = state.temperture.slice(1);
    t.push(temp);
    state.temperture = t;
  },
  set_mode(state, mode) {
    state.mode = mode;
  },
  set_preset(state, preset) {
    state.preset = preset;
  },
  reset(state) {
    state.temperture = new Array(20).fill(25);
    state.mode = 0;
    state.preset = 25;
  }
}

const actions = {
  push(context, args) {
    context.commit('set_temp', args);
  },
  turn(context, args) {
    context.commit('set_mode', args);
  },
  set(context, args) {
    context.commit('set_preset', args);
  },
}

export default {
  state,
  getters,
  mutations,
  actions,
}
