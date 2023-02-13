<template>
  <button @click="onClick" :disabled="disabled" class="primary-action-btn">
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    disabled: { type: Boolean, required: false, default: false },
  },
  methods: {
    onClick() {
      this.$emit("click")
    },
  },
}
</script>

<style>
.primary-action-btn {
  font-size: 1rem;
  font-weight: bold;
  height: 35px;
  padding: 0 20px;
  border: none;
  border-radius: 5px;
  color: rgb(40, 40, 40);
  background-color: #33f5b7;
  display: flex;
  align-items: center;
  cursor: pointer;
}
.primary-action-btn:hover {
  background-color: #8ff0d2;
}
.primary-action-btn:disabled {
  opacity: 0.3;
  background-color: #33f5b7;
  cursor: not-allowed;
}
</style>
