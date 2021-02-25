import { ref } from 'vue'
import { auth } from '../firebase/config'

const error = ref(null)

const signup = async (email, password, displayName) => {
  error.value = null

  try {
    const response = await auth.createUserWithEmailAndPassword(email, password)
    if (!response) throw new Error('Cannot sign up')

    await response.user.updateProfile({ displayName })
    error.value = null

    return response
  } catch (err) {
    error.value = err.message
  }
}

export const useSignup = () => ({ error, signup })
