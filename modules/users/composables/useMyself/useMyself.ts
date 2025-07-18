import { useSession } from '@/modules/auth/composables/useSession/useSession'
import type { User } from '@/modules/users/entities/User/User'
import type { MySelfContextProvider } from './types'
import type { InjectionKey } from 'vue'

export const myselfKey = Symbol('myself') as InjectionKey<MySelfContextProvider>

export function useMyself(): {
  loading: Ref<boolean>
  user: Ref<User | undefined>
} {
  const { logAndTrace } = useLogger()
  const services = useServices()
  const session = useSession()
  const loading = ref<boolean>(true)
  const user = ref<User>()

  provide<MySelfContextProvider>(myselfKey, { user, loading })

  const fetchUser = async () => {
    loading.value = true

    try {
      const response = await services.users.getMyself(session.user.value?.id!)
      if (!response) {
        return
      }

      user.value = response
    } catch (e) {
      logAndTrace(e)
    } finally {
      loading.value = false
    }
  }

  onMounted(() => {
    fetchUser()
  })

  return {
    loading,
    user,
  }
}
