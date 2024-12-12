<template>
  <div>
    <h5>My Todo</h5>

    <ul>
      <li v-for="(item, index) in lists" :key="item.id">
        <div style="display: flex; justify-content: center">
          <!-- Edit 상태 -->
          <div v-if="item.isEdit">
            <input type="text" v-model="newTodo" />
          </div>

          <!-- View 상태 -->
          <div v-else>
            <label :for="`todo-${item.id}`">
              <input
                :id="`todo-${item.id}`"
                type="checkbox"
                :checked="item.isDone"
                @change="handleToggleTodo(index)"
              />
              <span :class="{ 'todo-done': item.isDone }">{{ item.todo }}</span>
            </label>
          </div>

          <!-- Edit 버튼 -->
          <button
            class="editTodo"
            @click="
              item.isEdit
                ? handleUpdateTodo(index)
                : handleToggleIsEdit(index, item.todo)
            "
          >
            {{ item.isEdit ? "저장" : "수정" }}
          </button>

          <!-- Delete 버튼 -->
          <button class="deleteTodo" @click="handleDeleteTodo(index)">
            삭제
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "TodoList",
  computed: {
    ...mapState("todo", ["lists"]),

  },
  data() {
    return {
      newTodo: "", // 현재 편집 중인 todo를 임시로 저장
    };
  },
  methods: {
    ...mapMutations("todo", [
      "toggleTodo",
      "deleteTodo",
      "toggleIsEdit",
      "updateTodo",
    ]),
    handleToggleTodo(index) {
      this.toggleTodo(index);
    },
    handleDeleteTodo(index) {
      this.deleteTodo(index);
    },
    handleToggleIsEdit(index, todo) {
      this.newTodo = todo; // 편집 모드 진입 시 기존 todo 값을 newTodo로 설정
      this.toggleIsEdit(index);
    },
    handleUpdateTodo(index) {
      this.updateTodo({ index, newTodo: this.newTodo }); // Vuex mutation 호출
      this.newTodo = ""; // 저장 후 초기화
    },
  },
  watch: {
    lists: {
      handler(newLists) {
        console.log("lists가 변경되었습니다:", newLists);
      },
      deep: true, // 객체 내부 속성 변화까지 감지
    },
  },
};
</script>

<style scoped>
.todo-done {
  text-decoration: line-through;
  color: gray;
}

li {
  list-style: none;
}

.deleteTodo,
.editTodo {
  margin-left: 10px;
  margin-bottom: 5px;
}
</style>
