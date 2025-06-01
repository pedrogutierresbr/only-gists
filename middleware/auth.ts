import { useSession } from '@/modules/auth/composables/useSession/useSession'

export default defineNuxtRouteMiddleware(async (to, from) => {
  const session = useSession()
  const isLogged = session.isLogged()

  if (!isLogged) {
    console.log('User not authenticated')

    if (to.path === '/auth/login') {
      return
    }

    return navigateTo('/auth/login')
  }
})
