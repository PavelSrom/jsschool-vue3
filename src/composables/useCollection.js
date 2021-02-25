import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'

/**
 * @param {'message' | string} collection
 * @param {object} item
 */
export const useCollection = () => {
  const error = ref(null)

  const addItem = async (item, collection = 'messages') => {
    error.value = null

    try {
      await projectFirestore.collection(collection).add(item)
    } catch (err) {
      console.log(err)
      error.value = err.message
    }
  }

  return { error, addItem }
}
