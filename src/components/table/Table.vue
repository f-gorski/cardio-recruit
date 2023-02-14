<template>
  <div class="table-container">
    <table class="table">
      <slot />
    </table>
  </div>
</template>

<script>
export default {}
</script>

<style>
.table-container {
  overflow-x: auto;
}
.table {
  width: 100%;
  min-width: 875px;

  color: white;
  border-collapse: collapse;
  border-radius: 20px;
}
</style>
