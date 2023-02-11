<template>
  <h2 class="page__title">{{ title }}</h2>
</template>

<script>
export default {
  props: {
    title: { type: String },
  },
  mounted() {
    console.log("title mounted", this.title)
  },
}
</script>

<style>
.page__title {
  color: white;
  font-size: 1.5rem;
  margin-left: 30px;
}
</style>
