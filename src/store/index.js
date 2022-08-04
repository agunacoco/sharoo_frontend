import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import user from "./modules/user";

export const store = createStore({
  modules: {
    user,
  },
  plugins: [createPersistedState()],
});
