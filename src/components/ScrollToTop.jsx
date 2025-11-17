import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

function ScrollToTop() {
  const { pathname } = useLocation()
  const prevPathname = useRef(pathname)

  useEffect(() => {
    // Only scroll to top if the pathname actually changed (navigation occurred)
    if (prevPathname.current !== pathname) {
      // Small delay to ensure the route has changed
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        })
      }, 0)
      prevPathname.current = pathname
    }
  }, [pathname])

  return null
}

export default ScrollToTop

