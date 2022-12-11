<template>
  <div style="background: red; height: 100vh">
    <p>Message is: '{{ myVal }}'</p>
  </div>
</template>

<script>
export default {
  emits: {},
  props: {},
  data() {
    return {
      myVal: "anothe page.......",
    };
  },
  methods: {},
  mounted() {},
};
</script>

<style scoped>
</style>