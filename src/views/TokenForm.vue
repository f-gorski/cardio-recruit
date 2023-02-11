<template>
  <form @submit.prevent="handleSubmit">
    <input v-model="token" type="text" />
    <button role="submit">Add Token</button>
  </form>
</template>

<script>
import { mapActions } from "vuex"

export default {
  data() {
    return {
      token: "",
    }
  },
  methods: {
    ...mapActions({
      setToken: "setToken",
    }),
    async handleSubmit() {
      this.setToken(this.token)
    },
  },
}
</script>

<style></style>
