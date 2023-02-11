<template>
  <td class="table__name-cell">
    <span>
      <span>{{ name }}</span>
      <span v-show="isNew" class="new-indicator">NEW</span>
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
  /* position: relative; */
}
.new-indicator {
  position: absolute;
  top: -1.5em;
  right: -2.8em;
  font-size: 0.6em;
  font-weight: 800;
  color: #f57164;
}
</style>
