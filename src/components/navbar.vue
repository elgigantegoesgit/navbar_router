<template>
  <div ref="navbarref" class="navbar">
    <div class="logo">
      <img src="../assets/logo.png" style="width: 80px" />
    </div>

    <div class="nav_button_container">
      <router-link to="/" class="btn">Home</router-link>
      <router-link to="/table" class="btn">Table</router-link>
      <router-link to="/about" class="btn">About</router-link>

      <div class="btn" @click="$emit('mypopup')">Modal popup</div>
      <div class="btn" @click="mymeth('MY_METH')">myMethod</div>
      <div class="btn" @click="mymeth('22222')">2222</div>
      <div style="display: block; margin-right: 10px">▲▼</div>
    </div>
  </div>
</template>

<script>
export default {
  emits: ["newnavbarheight", "mypopup"],
  props: {},
  data() {
    return {
      myVal: "xx now news xx",
    };
  },
  methods: {
    mymeth(val_) {
      alert("xxx mymeth() called with: " + val_);
    },
  },
  mounted() {
    // Observe navbar height to adapt content y position accordingly
    /* const resizeObserver = new ResizeObserver(() => {
      this.$emit("newnavbarheight", this.$refs.navbarref.clientHeight);
    });
    resizeObserver.observe(this.$refs.navbarref);
    */
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