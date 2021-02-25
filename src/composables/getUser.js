import { ref } from 'vue'
import { auth } from '../firebase/config'

const user = ref(auth.currentUser)

auth.onAuthStateChanged(currUser => {
  user.value = currUser
})

export const getUser = () => ({ user })
