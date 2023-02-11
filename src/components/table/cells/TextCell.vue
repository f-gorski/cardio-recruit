<template>
  <td class="table__text-cell">
    <slot>
      {{ text }}
    </slot>
  </td>
</template>

<script>
export default {
  props: {
    text: { type: String },
  },
}
</script>

<style>
.table__text-cell {
  padding: 20px 30px;
}
</style>
