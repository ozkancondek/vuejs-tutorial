<template>
  <button class="btn btn-primary" @click="$emit('toggle')">Toggle</button>
  <!--  <button class="btn btn-primary" @click="emitEvent">Toggle</button> -->
</template>
<script setup lang="ts">
import { defineEmits } from "vue";
const emit = defineEmits(["toggle"]);

/* const emitEvent = () => {
  emit("toggle");
}; */
</script>
