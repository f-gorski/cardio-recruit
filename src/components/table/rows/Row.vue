<template>
  <tr class="table__row">
    <slot />
  </tr>
</template>

<script>
export default {}
</script>

<style>
.table__row {
  color: white;
  font-size: 1rem;
}
.table__row:nth-child(even) {
  background-color: #242e3e;
}
.table__row:hover {
  background-color: #2e3846;
}
</style>
