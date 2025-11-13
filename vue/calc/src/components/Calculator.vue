<template>
  <div class="container">
    <h1>Calculator</h1>
    <input type="text" v-model="screen" />
    <div class="row">
      <button
        @click="btnClick(b)"
        v-for="(n, b) in 10"
        class="col-3 btn btn-outline-secondary"
      >
        {{ b }}
      </button>
      <button
        @click="btnClick(b)"
        v-for="b in btns"
        class="col-3 btn btn-outline-secondary"
      >
        {{ b }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

let btns = ["+", "-", "/", "*", "C", "="];
const screen = ref("0");
const btnClick = (val) => {
  if (val != "=" && val != 'C') {
    if (screen.value == "0") {
      screen.value = String(val);
    } else {
      screen.value += String(val);
    }
  } else {
    if (val == 'C'){
        screen.value = '0';
    } else{
      screen.value = eval(screen.value);

    }
  }
};
</script>
