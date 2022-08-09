<template>
  <div>
    <h1>{{ componentText }}</h1>
    <slot name="upper"></slot>
    <p>This p in chid component</p>
    <p>than I added slot tag</p>
    <slot name="buttom"></slot>
  </div>
</template>

<script>
export default {
  props: {
    componentText: {
      type: String,
      default: () => "Iam the default value",
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
div {
  margin-top: 10px;
  padding: 10px;
  border: 2px solid purple;
}
</style>
