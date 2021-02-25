<template>
  <div class="max-w-screen-sm mt-8 mx-auto">
    <login-form v-if="showLogin" @login="enterChat" />
    <signup-form v-else @login="enterChat" />

    <span class="cursor-pointer underline" @click="showLogin = !showLogin">
      {{ showLogin ? 'Sign up instead' : 'Sign in instead' }}
    </span>
  </div>
</template>

<script>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import SignupForm from '../components/SignupForm.vue'
  import LoginForm from '../components/LoginForm.vue'

  export default {
    name: 'Welcome',
    components: {
      SignupForm,
      LoginForm,
    },
    setup() {
      const showLogin = ref(true)
      const router = useRouter()

      const enterChat = () => router.push({ name: 'Chatroom' })

      return { showLogin, enterChat }
    },
  }
</script>
