import { motion, useAnimation } from 'framer-motion'
import React, { ReactNode, useRef } from 'react'

export default function MagneticButton({
  className,
  containerMagnet = 0.1,
  textMagnet = 0.15,
  children,
  onClick,
}: {
  className?: string
  containerMagnet?: number
  textMagnet?: number
  children: ReactNode
  onClick?: any
}) {
  const btnRef = useRef<HTMLButtonElement>(null)
  const buttonContainer = useAnimation()
  const textControls = useAnimation()
  const handleMouseMove = (e: any) => {
    if (btnRef.current) {
      const position = btnRef?.current?.getBoundingClientRect()
      const x = e.pageX - position.left
      const y = e.pageY - position.top
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      buttonContainer.start({
        x: (x - position.width / 2) * 0.2,
        y: (y - position.height / 2 - scrollTop) * 0.2,
      })
      textControls.start({
        x: (x - position.width / 2) * 0.25,
        y: (y - position.height / 2 - scrollTop) * 0.25,
      })
    }
  }
  const handleMouseOut = (e: any) => {
    if (btnRef.current) {
      buttonContainer.start({
        x: 0,
        y: 0,
      })
      textControls.start({
        x: 0,
        y: 0,
      })
    }
  }
  return (
    <motion.button
      onClick={onClick}
      ref={btnRef}
      animate={buttonContainer}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseOut}
      className={`${className}`}
    >
      <motion.div animate={textControls}>{children ?? 'Hover'}</motion.div>
    </motion.button>
  )
}
