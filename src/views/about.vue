<template>
  <div style="background: blue; height: 100vh">
    <p>Message is: '{{ myVal }}'</p>
  </div>
</template>

<script>
export default {
  emits: {},
  props: {},
  data() {
    return {
      myVal: "xx now news xx",
    };
  },
  methods: {},
  mounted() {},
};
</script>

<style scoped>
</style>