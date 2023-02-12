<template>
  <td class="table__date-cell">{{ formattedDate }}</td>
</template>

<script>
import { DateTime } from "luxon"

export default {
  props: {
    date: { type: String },
  },
  computed: {
    formattedDate() {
      return DateTime.fromISO(this.date).toFormat("dd LLL yyyy HH:mm:ss")
    },
  },
}
</script>

<style>
.table__date-cell {
  padding: 20px 30px;
}
</style>
