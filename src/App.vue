<template>
  <TokenForm v-if="!hasToken" />
  <Signals v-else />
  <!-- <PDF /> -->
</template>

<script>
import { mapGetters } from "vuex"

import Signals from "./views/Signals.vue"
import TokenForm from "./views/TokenForm.vue"

import PDF from "./views/PDF.vue"

export default {
  components: { Signals, TokenForm, PDF },
  computed: {
    ...mapGetters(["hasToken"]),
  },
}
</script>

<style></style>
