<template>
  <td class="table__recency-cell">{{ isRecent }}</td>
</template>

<script>
export default {
  props: {
    isRecent: { type: Boolean },
  },
}
</script>

<style>
.table__recency-cell {
  padding: 20px 30px;
}
</style>
