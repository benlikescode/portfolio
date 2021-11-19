import { useState, useEffect } from 'react'

const useScrollDirection = (initialDirection: 'up' | 'down') => {
  const [scrollDir, setScrollDir] = useState(initialDirection)

  useEffect(() => {
    let lastScrollY = window.scrollY
    let ticking = false

    const updateScrollDir = () => {
      const scrollY = window.scrollY

      setScrollDir(scrollY > lastScrollY ? 'down' : 'up')
      lastScrollY = scrollY > 0 ? scrollY : 0
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir)
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [initialDirection])

  return scrollDir
}

export default useScrollDirection