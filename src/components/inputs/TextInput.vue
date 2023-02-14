<template>
  <label class="text-input">
    <div v-show="label">
      <span>{{ label }}</span>
    </div>
    <input
      :value="modelValue"
      @input="handleInput($event)"
      :disabled="disabled"
      type="text"
      class="text-input__field"
    />
    <div v-show="error" class="text-input__error">{{ error }}</div>
  </label>
</template>

<script>
export default {
  props: {
    label: { type: String },
    disabled: { type: Boolean },
    modelValue: { type: String },
    error: { type: String },
  },
  methods: {
    handleInput(event) {
      this.$emit("update:modelValue", event.target.value)
    },
  },
}
</script>

<style>
.text-input {
  width: 100%;
}
.text-input__field {
  width: 100%;
  height: 2rem;
  padding: 0.75rem;
}
.text-input__error {
  font-size: 12px;
  color: rgb(189, 2, 2);
}
</style>
