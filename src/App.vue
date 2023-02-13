<template>
  <TokenForm v-if="!hasToken" />
  <Signals v-else />
</template>

<script>
import { mapGetters } from "vuex"

import Signals from "./views/Signals.vue"
import TokenForm from "./views/TokenForm.vue"

export default {
  components: { Signals, TokenForm },
  computed: {
    ...mapGetters(["hasToken"]),
  },
}
</script>

<style></style>
