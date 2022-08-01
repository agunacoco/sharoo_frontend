import { USER } from "../mutation-types";
import { login } from "../../api/users";

const state = {
  accessToken: "",
  user: null,
};

const getters = {};

const actions = {
  async login({ commit }, payload) {
    const {
      data: { accessToken, user },
    } = await login(payload);
    commit(USER.SET_ACCESS_TOKEN, accessToken);
    commit(USER.SET_USER, user);
  },
};

const mutations = {
  [USER.SET_ACCESS_TOKEN](state, value) {
    state.accessToken = value;
  },
  [USER.SET_USER](state, value) {
    state.user = value;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
