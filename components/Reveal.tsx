import { useEffect, useRef, useState } from 'react'

interface RevealProps {
  children: React.ReactNode
  className?: string
  threshold?: number
  direction?: 'up' | 'down' | 'left' | 'right'
}

export default function Reveal({ children, className = '', threshold = 0.15, direction = 'down' }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold])

  const animationClasses = visible
    ? 'opacity-100 translate-y-0 translate-x-0'
    : `opacity-0 ${
        direction === 'up'
          ? 'translate-y-4'
          : direction === 'left'
          ? 'translate-x-4'
          : direction === 'right'
          ? '-translate-x-4'
          : 'translate-y-4'
      }`;

  return (
    <div
      ref={ref}
      className={`transform transition-all duration-700 ease-out will-change-transform ${animationClasses} ${className}`}
    >
      {children}
    </div>
  )
}