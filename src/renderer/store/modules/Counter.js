const state = {
  temperture: 25,
}

const getters = {
  temperture(state) {
    return state.temperture;
  },
}

const mutations = {
  set_temp(state, temp) {
    state.temperture = temp;
    localStorage.setItem("temp", temp);
  },
}

const actions = {
  set_temp(context, args) {
    context.commit('set_temp', args);
  },
}

export default {
  state,
  getters,
  mutations,
  actions,
}
