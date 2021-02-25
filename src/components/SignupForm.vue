<template>
  <form @submit.prevent="handleSubmit" class="flex flex-col space-y-4">
    <h1 class="text-3xl text-center text-green-500">Sign up</h1>

    <div
      v-if="!!error"
      class="bg-red-100 border border-red-500 p-2 text-center"
    >
      <p>{{ error }}</p>
    </div>

    <input
      type="text"
      required
      placeholder="Display name"
      v-model="name"
      class="p-2 border border-black rounded-md"
    />
    <input
      type="email"
      required
      placeholder="Email"
      v-model="email"
      class="p-2 border border-black rounded-md"
    />
    <input
      type="password"
      required
      placeholder="Password"
      v-model="password"
      class="p-2 border border-black rounded-md"
    />
    <button
      class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-500 hover:bg-green-700 md:py-4 md:text-lg md:px-10"
    >
      Sign up
    </button>
  </form>
</template>

<script>
  import { ref } from 'vue'
  import { useSignup } from '../composables/useSignup'

  export default {
    setup(_props, context) {
      const { error, signup } = useSignup()

      const name = ref('')
      const email = ref('')
      const password = ref('')

      const handleSubmit = async () => {
        await signup(email.value, password.value, name.value)

        if (!error.value) context.emit('login')
      }

      return { name, email, password, error, handleSubmit }
    },
  }
</script>
