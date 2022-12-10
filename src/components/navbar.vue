<template>
  <div ref="navbarref" class="navbar">
    <div class="logo">
      <img src="../assets/logo.png" style="width: 80px" />
    </div>

    <div class="nav_button_container">
      <div class="btn" @click="$emit('show1')">Table</div>
      <div class="btn" @click="$emit('show2')">Flex</div>
      <div class="btn" @click="$emit('showlist')">Sort</div>

      <div class="btn" @click="$emit('show1')">xxxxx</div>
      <div class="btn" @click="$emit('show2')">yyyyyyyy</div>
      <div class="btn" @click="mymeth('ZZZ')">zz</div>

      <div class="btn" @click="$emit('show1')">111</div>
      <div class="btn" @click="$emit('show2')">2222</div>
      <div class="btn" @click="$emit('showlist')">3333</div>
    </div>
  </div>
</template>

<script>
export default {
  emits: ["newnavbarheight"],
  props: {},
  data() {
    return {
      myVal: "xx now news xx",
    };
  },
  methods: {
    mymeth() {
      alert("xxx mymeth() called.");
    },
  },
  mounted() {
    // Observe navbar height to adapt content y position accordingly
    const resizeObserver = new ResizeObserver(() => {
      this.$emit("newnavbarheight", this.$refs.navbarref.clientHeight);
    });
    resizeObserver.observe(this.$refs.navbarref);
  },
};
</script>

<style scoped>
.navbar {
  position: fixed;
  z-index: 200;
  display: flex;

  left: 0; /* top left corner should start at leftmost spot */
  top: 0; /* top left corner should start at topmost spot */
  /* height: 60px; */
  width: 100vw;
  justify-content: space-between;
  align-items: center;
  border: 1px solid darkblue;
  background: lightblue;
}

.nav_button_container {
  display: flex;
  flex-flow: row wrap;
  width: 100vw;
  background: lightblue;
}
</style>