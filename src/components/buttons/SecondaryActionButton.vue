<template>
  <button
    @click="onClick"
    :disabled="disabled"
    class="secondary-action-btn"
    :class="{ 'secondary-action-btn--large': large }"
  >
    <slot />
  </button>
</template>

<script>
export default {
  methids: {
    onClick() {
      this.$emit("click")
    },
  },
}
</script>

<style>
.secondary-action-btn {
  font-size: 1rem;
  font-weight: bold;
  height: 35px;
  padding: 0 20px;
  border: none;
  border-radius: 5px;
  color: white;
  background-color: #374151;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.secondary-action-btn:hover {
  background-color: #2e3846;
}
.secondary-action-btn:disabled {
  opacity: 0.3;
  background-color: #374151;
  cursor: not-allowed;
}
</style>
