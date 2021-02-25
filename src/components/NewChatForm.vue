<template>
  <form class="justify-self-end">
    <textarea
      placeholder="Type a message..."
      v-model="message"
      @keypress.enter="handleSubmit"
      class="w-full p-2 border border-black rounded-lg resize-none"
      rows="1"
    ></textarea>
  </form>
</template>

<script>
  import { ref } from 'vue'
  import { getUser } from '../composables/getUser'
  import { useCollection } from '../composables/useCollection'
  import { timestamp } from '../firebase/config'

  export default {
    setup() {
      const message = ref('')
      const { user } = getUser()
      const { error, addItem } = useCollection()

      const handleSubmit = async () => {
        await addItem({
          message: message.value,
          name: user.value.displayName,
          createdAt: timestamp(),
        })

        message.value = ''
      }

      return { message, handleSubmit }
    },
  }
</script>
