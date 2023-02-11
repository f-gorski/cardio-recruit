<template>
  <td class="table__date-cell">{{ date }}</td>
</template>

<script>
export default {
  props: {
    date: { type: String },
  },
}
</script>

<style>
.table__date-cell {
  padding: 20px 30px;
}
</style>
