import './styles/tailwind.css'
import { createApp, h, provide } from 'vue'
import App from './App.vue'
import router from './router'

// Splide (carousel)
import { SplidePlugin } from '@splidejs/vue-splide'
import '@splidejs/vue-splide/css'

// Apollo (GraphQL)
import { DefaultApolloClient } from '@vue/apollo-composable'
import apolloClient from './apollo'

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient)
  },
  render: () => h(App)
})

app.use(router)
app.use(SplidePlugin)

app.mount('#app')