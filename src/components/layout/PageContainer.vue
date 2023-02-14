<template>
  <div class="page">
    <slot />
  </div>
</template>

<script>
export default {}
</script>

<style>
.page {
  top: 0;
  left: 0;
  height: calc(100vh - 3rem);
  padding: 1.5rem;
  background-color: #1f2937;
}
</style>
