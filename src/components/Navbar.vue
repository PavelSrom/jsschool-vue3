<template>
  <div v-if="!!user" class="flex justify-between items-center bg-white p-2">
    <nav>
      <p>Hi {{ user.displayName }}</p>
      <p>Currently logged in as {{ user.email }}</p>
    </nav>
    <button
      class="p-2 rounded bg-green-500 hover:bg-green-700 text-white"
      @click="handleLogout"
    >
      Log out
    </button>
  </div>
</template>

<script>
  import { getUser } from '../composables/getUser'
  import { useLogout } from '../composables/useLogout'

  export default {
    setup() {
      const { user } = getUser()
      const { error, logout } = useLogout()

      const handleLogout = async () => {
        await logout()
      }

      return { error, handleLogout, user }
    },
  }
</script>
