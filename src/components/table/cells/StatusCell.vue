<template>
  <td class="table__status-cell">{{ status }}</td>
</template>

<script>
export default {
  props: {
    status: { type: String },
  },
}
</script>

<style>
.table__status-cell {
  padding: 20px 30px;
}
</style>
