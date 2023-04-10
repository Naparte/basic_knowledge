<script>
export default {
  name: "Test",
  data() {
    return {
      a: 1,
    };
  },
  watch: {
    a(val) {
      console.log("a 变化", val);
    },
  },
  methods: {
    addA() {
      this.a = 1;
    },
  },
};
</script>

<template>
  <div>
    <div>a: {{ a }}</div>
    <button @click="addA">a</button>
  </div>
</template>
