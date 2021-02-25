import { ref, watchEffect } from 'vue'
import { projectFirestore } from '../firebase/config'

export const getCollection = (collection = 'messages') => {
  const documents = ref(null)
  const error = ref(null)

  const collectionRef = projectFirestore
    .collection(collection)
    .orderBy('createdAt')

  const unsubscribe = collectionRef.onSnapshot(
    snapshot => {
      const results = []

      snapshot.docs.forEach(doc => {
        if (doc.data().createdAt) {
          results.push({ ...doc.data(), id: doc.id })
        }
      })

      documents.value = results
      error.value = null
    },
    err => {
      error.value = err.message
      documents.value = null
    }
  )

  // cleanup after unmount
  watchEffect(onInvalidate => {
    onInvalidate(() => unsubscribe())
  })

  return { documents, error }
}
