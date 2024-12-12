import Vue from "vue";
import Vuex from "vuex";
import todo, { TodoState } from "./modules/todo";

Vue.use(Vuex);

export interface RootState {
  todo: TodoState;
}

export default new Vuex.Store<RootState>({
  modules: {
    todo, // todo 모듈 추가
  },
});
