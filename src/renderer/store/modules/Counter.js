const state = {
  is_login: false,
  id: localStorage.getItem("id") ? localStorage.getItem("id") : null,
  name: localStorage.getItem("name") ? localStorage.getItem("name") : null,
  token: localStorage.getItem("token") ? localStorage.getItem("token") : null,
  refresh_token: localStorage.getItem("refresh_token") ? localStorage.getItem("refresh_token") : null,
}

const getters = {
  id(state) {
    return state.id;
  },
  name(state) {
    return state.name;
  },
  is_login(state) {
    return state.is_login;
  },
  Token: function (state) {
    return state.token;
  },
  Refresh_Token: function (state) {
    return state.refresh_token;
  },
}

const mutations = {
  set_name(state, name) {
    state.id = name;
    localStorage.setItem("id", name);
  },
  set_selfname(state, name) {
    state.name = name;
    localStorage.setItem("name", name);
  },
  set_log(state, log) {
    state.is_login = log;
  },
  del_token(state) {
    state.token = null;
    localStorage.setItem("token", "");
  },
  userToken(state, token) {
    state.token = token ? token : "";
    localStorage.setItem("token", token ? token : "");
  },
  userRefreshToken(state, refresh_token) {
    state.refresh_token = refresh_token ? refresh_token : "";
    localStorage.setItem("refresh_token", refresh_token ? refresh_token : "");
  }
}

const actions = {
  set_log(context, args) {
    context.commit('set_log', args);
  },
  Update_Token({ commit }, data) {
    commit("userToken", data);
  },
  Del_Token({ commit }) {
    commit("del_token");
  },
  Set_Name({ commit }, argv) {
    commit("set_name", argv);
  },
  Set_SelfName({ commit }, argv) {
    commit("set_selfname", argv);
  }
}

export default {
  state,
  getters,
  mutations,
  actions,
}
