import { ref } from 'vue'
import { auth } from '../firebase/config'

const error = ref(null)

const logout = async () => {
  error.value = null

  try {
    await auth.signOut()
  } catch (err) {
    error.value = err.message
  }
}

export const useLogout = () => ({ error, logout })
