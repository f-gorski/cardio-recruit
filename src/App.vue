<template>
  <AddToken v-if="!hasToken" />
  <Signals v-else />
</template>

<script>
import { mapGetters } from "vuex"

import Signals from "./views/Signals/Signals.vue"
import AddToken from "./views/AddToken/AddToken.vue"

export default {
  components: { Signals, AddToken },
  computed: {
    ...mapGetters(["hasToken"]),
  },
}
</script>

<style></style>
