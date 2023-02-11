<template>
  <td class="header-row__cell">{{ title }}</td>
</template>

<script>
export default {
  props: {
    title: { type: String },
  },
}
</script>

<style>
.header-row__cell {
  padding: 0.5rem 30px;
  font-size: 1rem;
  color: rgb(222, 222, 222);
  font-weight: 600;
  text-transform: uppercase;
}
.header-row__cell:hover {
  background-color: #2e3846;
}
</style>
