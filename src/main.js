import { createApp } from "vue"

import store from "./store"
import App from "./App.vue"
import "./assets/base.css"
import "normalize.css"

import { createVuetify } from "vuetify"
import * as components from "vuetify/components"
import * as directives from "vuetify/directives"

const vuetify = createVuetify({
  components,
  directives,
})

const app = createApp(App)

app.use(store)
app.use(vuetify)

app.mount("#app")
