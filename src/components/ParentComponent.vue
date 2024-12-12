<template>
  <div>
    <ChildComponent @sendData="handleData" />
    <button @click="handleInit">초기화</button>
    {{ receivedData ?? "없음" }}
  </div>
</template>

<script>
import ChildComponent from "./ChildComponent.vue";
export default {
  components: {
    ChildComponent,
  },
  data() {
    return {
      receivedData: null,
    };
  },
  methods: {
    handleData(data) {
      this.receivedData = data;
    },
    handleInit() {
      this.receivedData = null;
    },
  },
};
</script>
