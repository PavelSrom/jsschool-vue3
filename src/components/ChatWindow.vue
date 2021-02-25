<template>
  <div class="p-2 overflow-scroll flex-1" ref="chatBox">
    <div v-if="error">{{ error }}</div>

    <div v-if="!!documentsToRender" class="space-y-2">
      <div
        v-for="doc in documentsToRender"
        :key="doc.id"
        class="rounded-xl bg-green-400 text-white p-2"
      >
        <div class="flex justify-between items-center">
          <p class="font-bold text-xl">{{ doc.name }}</p>
          <p class="text-sm">{{ doc.createdAt }} ago</p>
        </div>
        <p class="text-base">{{ doc.message }}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import { formatDistanceToNow } from 'date-fns'
  import { getCollection } from '../composables/getCollection'
  import { computed, onUpdated, ref } from 'vue'

  export default {
    setup() {
      const { error, documents } = getCollection()
      const chatBox = ref(null)

      const documentsToRender = computed(() => {
        if (documents.value) {
          return documents.value.map(doc => ({
            ...doc,
            createdAt: formatDistanceToNow(doc.createdAt.toDate()),
          }))
        }
      })

      onUpdated(() => {
        chatBox.value.scrollTop = chatBox.value.scrollHeight
      })

      return { error, documentsToRender, chatBox }
    },
  }
</script>
