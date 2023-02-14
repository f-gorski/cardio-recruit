<template>
  <div class="token-form">
    <h4 class="token-form__header">Add Private Token:</h4>
    <form class="token-form__form-area" @submit.prevent="handleSubmit">
      <TextInput v-model="token" label="Token" :error="errors.token" />
      <div class="token-form__actions">
        <SecondaryActionButton role="submit">Add Token</SecondaryActionButton>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex"
import SecondaryActionButton from "../components/buttons/SecondaryActionButton.vue"
import TextInput from "../components/inputs/TextInput.vue"

export default {
  components: {
    SecondaryActionButton,
    TextInput,
  },
  data() {
    return {
      token: "",
      errors: {
        token: "",
      },
    }
  },
  methods: {
    ...mapActions({
      setToken: "setToken",
    }),
    validateToken() {
      if (!this.token.length) {
        this.errors.token = "Required"
        return false
      }

      if (!this.token.match(/^[0-9A-Fa-f]+$/)) {
        this.errors.token = "Token must consist of valid hexadecimal characters"
        return false
      }

      this.errors.token = ""
      return true
    },
    async handleSubmit() {
      const isTokenValid = this.validateToken()
      if (isTokenValid) {
        this.setToken(this.token)
      }

      return
    },
  },
}
</script>

<style>
.token-form {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 390px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  border-radius: 10px;
}
.token-form__header {
  text-align: center;
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 2rem;
}
.token-form__form-area {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.token-form__actions {
  margin-top: 2rem;
  display: flex;
  justify-content: center;
}
@media (max-width: 480px) {
  .token-form {
    width: 100%;
  }
  .token-form__form-area {
    padding: 0 2rem;
    width: 75%;
  }
}
</style>
