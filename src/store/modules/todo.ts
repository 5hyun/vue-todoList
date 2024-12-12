import { Module } from "vuex";
import { v1 as uuid } from "uuid"; // vue-uuid 대신 uuid 라이브러리 사용
import { RootState } from "../index"; // 루트 스토어의 타입 정의

// Todo 타입 정의
export interface Todo {
  id: string;
  todo: string;
  isDone: boolean;
  isEdit: boolean;
}

// State 타입 정의
export interface TodoState {
  lists: Todo[];
}

// 초기 상태 정의
const state: TodoState = {
  lists: [
    {
      id: uuid(),
      todo: "밥 먹기",
      isDone: false,
      isEdit: false,
    },
    {
      id: uuid(),
      todo: "씻기",
      isDone: true,
      isEdit: false,
    },
    {
      id: uuid(),
      todo: "운동하기",
      isDone: false,
      isEdit: false,
    },
    {
      id: uuid(),
      todo: "책 읽기",
      isDone: false,
      isEdit: false,
    },
    {
      id: uuid(),
      todo: "코드 작성하기",
      isDone: true,
      isEdit: false,
    },
    {
      id: uuid(),
      todo: "요리하기",
      isDone: false,
      isEdit: false,
    },
    {
      id: uuid(),
      todo: "청소하기",
      isDone: true,
      isEdit: false,
    },
    {
      id: uuid(),
      todo: "쇼핑하기",
      isDone: false,
      isEdit: false,
    },
    {
      id: uuid(),
      todo: "영화 보기",
      isDone: true,
      isEdit: false,
    },
    {
      id: uuid(),
      todo: "산책하기",
      isDone: false,
      isEdit: false,
    },
  ],
};

// mutations 정의
const mutations = {
  addTodo(state: TodoState, newTodo: string) {
    state.lists.push({
      id: uuid(),
      todo: newTodo,
      isDone: false,
      isEdit: false,
    });
  },
  toggleTodo(state: TodoState, index: number) {
    state.lists[index].isDone = !state.lists[index].isDone;
  },
  deleteTodo(state: TodoState, index: number) {
    state.lists.splice(index, 1);
  },
  toggleIsEdit(state: TodoState, index: number) {
    state.lists.forEach((list) => (list.isEdit = false)); // 모두 false로 초기화
    state.lists[index].isEdit = true; // 대상만 true로 설정
  },
  updateTodo(state: TodoState, payload: { index: number; newTodo: string }) {
    state.lists[payload.index].todo = payload.newTodo;
    state.lists[payload.index].isEdit = false;
  },
};

// 모듈 생성
const todo: Module<TodoState, RootState> = {
  namespaced: true,
  state,
  mutations,
};

export default todo;
