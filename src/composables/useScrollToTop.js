import { useRouter } from 'vue-router'

export function useScrollToTop() {
  const router = useRouter()

  const scrollToTop = (path) => {
    // If we're already on the same route, just scroll to top
    if (router.currentRoute.value.path === path) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    } else {
      // Navigate to new route and scroll to top
      router.push(path).then(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
      })
    }
  }

  return {
    scrollToTop
  }
}
