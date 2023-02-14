<template>
  <td class="table__name-cell">
    <span class="table__name-cell-content">
      <span>{{ name }}</span>
      <sup v-show="isNew" class="new-indicator">NEW</sup>
    </span>
  </td>
</template>

<script>
export default {
  props: {
    name: { type: String },
    isNew: { type: Boolean },
  },
}
</script>

<style>
.table__name-cell {
  padding: 20px 30px;
}
.table__name-cell-content {
  position: relative;
}
.new-indicator {
  position: absolute;
  top: -0.5em;
  right: -2.5em;
  font-size: 0.6em;
  font-weight: 800;
  color: #f57164;
}
</style>
