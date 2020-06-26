const state = {
  mode: 0,
  temperture: new Array(20).fill(25),
  preset: 25,
  cost: 0,
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
  },
  cost(state) {
    return state.cost;
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
  set_cost(state, cost) {
    state.cost = cost;
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
  set_cost(context, args) {
    context.commit('set_cost', args);
  },
}

export default {
  state,
  getters,
  mutations,
  actions,
}
