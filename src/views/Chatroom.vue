<template>
  <div class="max-w-screen-sm mx-auto flex flex-col h-screen bg-green-50">
    <navbar />
    <chat-window />
    <new-chat-form />
  </div>
</template>

<script>
  import { watch } from 'vue'
  import { useRouter } from 'vue-router'
  import Navbar from '../components/Navbar'
  import NewChatForm from '../components/NewChatForm'
  import ChatWindow from '../components/ChatWindow'
  import { getUser } from '../composables/getUser'

  export default {
    components: {
      Navbar,
      NewChatForm,
      ChatWindow,
    },
    setup() {
      const { user } = getUser()
      const { push: navigate } = useRouter()

      // this is like useEffect, hmmm I wonder where did Evan get the inspiration from
      watch(user, () => {
        if (!user.value) navigate({ name: 'Welcome' })
      })
    },
  }
</script>

<style></style>
