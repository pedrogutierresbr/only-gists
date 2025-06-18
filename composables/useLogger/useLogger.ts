export function useLogger() {
  const config = useRuntimeConfig()

  const isProd = config.public.environment === 'production'

  const logAndTrace = (...args: any[]) => {
    if (isProd) {
      // @TODO send to sentry
      return
    }

    console.log(...args)
  }

  return {
    logAndTrace,
  }
}
