import { ref } from 'vue'
import { auth } from '../firebase/config'

const error = ref(null)

const login = async (email, password) => {
  error.value = null

  try {
    const response = await auth.signInWithEmailAndPassword(email, password)
    error.value = null

    return response
  } catch (err) {
    error.value = 'Incorrect credentials'
  }
}

export const useLogin = () => ({ error, login })
