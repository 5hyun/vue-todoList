<template>
  <div>
    <h2>메인 todo</h2>

    <TodoInput />
    <TodoList />
  </div>
</template>

<script>
import TodoInput from "./TodoInput.vue";
import TodoList from "./TodoList.vue";

export default {
  name: "MainTodo",
  components: {
    TodoInput,
    TodoList,
  },
};
</script>
