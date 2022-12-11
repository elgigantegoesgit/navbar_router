<template>
  <div style="background: green; height: 100vh">
    <p>TABLE message is: '{{ myVal }}'</p>
  </div>
</template>

<script>
export default {
  emits: {},
  props: {},
  data() {
    return {
      myVal: "TABLE anothe page.......",
    };
  },
  methods: {},
  mounted() {},
};
</script>

<style scoped>
</style>