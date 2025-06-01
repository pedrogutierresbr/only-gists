export function useSession() {
  const user = useSupabaseUser()
  const services = useServices()

  const isLogged = () => {
    const hasUserLogged = Boolean(user.value)
    return hasUserLogged
  }

  const logout = () => {
    const response = services.auth.signOut()
    return response
  }

  return {
    user,
    logout,
    isLogged
  }
}