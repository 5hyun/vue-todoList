<template>
  <div>
    <button @click="sendData">데이터 전달</button>
  </div>
</template>

<script>
export default {
  methods: {
    sendData() {
      const data = "hello";
      this.$emit("sendData", data);
    },
  },
};
</script>
