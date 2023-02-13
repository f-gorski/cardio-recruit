<template>
  <button :disabled="disabled" class="secondary-action-btn">
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    disabled: { type: Boolean, required: false, default: false },
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
  background-color: #1c222b;
}
.secondary-action-btn:disabled {
  opacity: 0.3;
  background-color: #374151;
  cursor: not-allowed;
}
</style>
