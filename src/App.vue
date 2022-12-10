<template>
  <mynavbar @newnavbarheight="newnavbarheight" />

  <div ref="contentref" class="content">
    <button @click="mypopup" style="margin-top: 1em">Open Popup...</button>
    <!-- embed  type="text/plain" src="./assets/text.txt" /      geht nicht -->
    <p>Filter val in App.vue: {{ myFilVal }}</p>
    <Table
      :myfields="myfields"
      :studentData="studentDatax"
      :myFilter="myFilVal"
    ></Table>

    <div ref="myModal" class="modal">
      <div class="modal-content">
        <span class="close" @click="mypopup">&times;</span>
        <p>Enter number to filter age for</p>
        <myInput @setfilterto="setfilter" />
      </div>
    </div>
  </div>
</template>

<script>
import mynavbar from "./components/navbar.vue";
import Table from "./components/table.vue";
import myInput from "./components/input.vue";
import mydata from "./assets/data.json";
import "./App.css";

export default {
  name: "App",
  components: {
    Table,
    myInput,
    mynavbar,
  },
  methods: {


    // called by emit from navbar, if navbar height changes due to resizing, set margin-top of content to new offset acc. to navbar height
    newnavbarheight(newnavbarheight_) {
      // console.log("changed: " + this.$refs.contentref.clientWidth  ); // works. all props see https://developer.mozilla.org/en-US/docs/Web/API/Element/clientHeight or better(?) https://www.w3schools.com/jsref/dom_obj_style.asp
      this.$refs.contentref.style.marginTop = newnavbarheight_ + "px";
      console.log(
        "changed content marginTop to: " + this.$refs.contentref.style.marginTop
      );
    },

    setfilter(fil_) {
      console.log("filterxxx" + fil_);
      this.myFilVal = Number(fil_);
      this.mypopup();
    },
    mypopup() {
      //this.$refs.myModal.style="display:block";
      if (this.$refs.myModal.style.display === "block")
        this.$refs.myModal.style = "display:none";
      else this.$refs.myModal.style = "display:block";
      //console.log(this.$refs.myModal.style);
    },
  },
  mounted() {
    console.log(Date.now() + "Mounted. Starting...");
  },

  data() {
    return {
      myFilVal: "23",
      myfields: mydata.myfields,

      studentDatax: mydata.studs,
    };
  },
};
</script>

<style>
</style>