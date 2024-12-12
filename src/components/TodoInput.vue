<template>
  <div>
    <input type="text" v-model="newTodo" placeholder="todo" />
    <button @click="handleAddTodo">add</button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "TodoInput",
  data() {
    return {
      newTodo: "",
    };
  },
  methods: {
    ...mapMutations("todo", ["addTodo"]),
    handleAddTodo() {
      if (this.newTodo.trim() !== "") {
        this.addTodo(this.newTodo);
        this.newTodo = "";
      } else {
        console.log("test");
        console.log("main");
        console.log("으로");
        console.log("rebase");
        alert("할 일을 입력하세요!!!!");
        console.log("1123");
        console.log("tst");
        console.log("123");
        console.log("evelop");
      }
    },
    logInputEvent(e) {
      // console.log("입력", e.target.value); // 입력 이벤트 발생 시 콘솔에 출력
    },
  },
  watch: {
    newTodo: function (todo, old) {
      console.log("입력", todo, old);
    },
  },
};
</script>
