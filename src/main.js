import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { auth } from './firebase/config'

let app

/**
 * I think this is a really bad solution since it might take a while
 * for Firebase to return data, or it can even fail, and while that
 * is going, the user doesn't see anything.
 *
 * A better solution imho is to set up an auth context (at least in React)
 * with a status 'pending' or 'done'. While the status is pending, the
 * user sees a spinner, and once it's done, based on if you're authenticated,
 * you'll be redirected to a route that you should see.
 */
auth.onAuthStateChanged(() => {
  if (!app)
    app = createApp(App)
      .use(router)
      .mount('#app')
})
