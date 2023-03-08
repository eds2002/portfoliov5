import { motion, useAnimation } from 'framer-motion'
import React, { useRef, useState } from 'react'

export default function Dev() {
  const btnRef = useRef<HTMLButtonElement>(null)
  const controls = useAnimation()
  const textControls = useAnimation()
  const handleMouseMove = (e: any) => {
    if (btnRef.current) {
      const position = btnRef?.current?.getBoundingClientRect()
      const x = e.pageX - position.left - position.width / 2
      const y = e.pageY - position.top - position.height / 2
      controls.start({
        x: x * 0.1,
        y: y * 0.1,
      })
      textControls.start({
        x: x * 0.15,
        y: y * 0.15,
      })
    }
  }
  const handleMouseOut = (e: any) => {
    if (btnRef.current) {
      controls.start({
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
    <div className="flex items-center justify-center w-screen h-screen">
      {/* <motion.button
        ref={btnRef}
        animate={controls}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseOut}
        className="rounded-full w-[300px] h-[300px] flex items-center justify-center bg-black text-white  "
      >
        <motion.p animate={textControls} className="text-3xl">
          Hover me
        </motion.p>
      </motion.button> */}

      {/* ANIMATED LOGO */}
      <AnimatedLogo />
    </div>
  )
}

const AnimatedLogo = () => {
  const [animate, setAnimate] = useState(false)
  const text = ['E', 'd', 'u', 'a', 'r', 'd', 'o']

  const container = {
    hidden: {
      x: 75,
      transition: {
        staggerChildren: -0.01,
        x: {
          delay: 0.16,
        },
        type: 'spring',
      },
    },
    show: {
      x: 0,
      transition: {
        staggerChildren: 0.01,
        x: {
          delay: 0.27,
        },
        bounce: 0,
      },
    },
  }

  const item = {
    hidden: (index: number) => ({
      opacity: index < 2 ? 1 : 0,
      x: index < 2 ? 0 : index * -50,
      transition: {
        opacity: {
          delay: 0.1,
        },
        x: {
          duration: 0.01,
        },
        bounce: 0.6,
      },
    }),
    show: () => ({
      opacity: 1,
      x: 0,
      transition: {
        opacity: {
          delay: 0.1,
        },
        type: 'spring',
        bounce: 0.5,
        duration: 0,
      },
    }),
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <motion.p
        variants={container}
        initial="hidden"
        animate={`${animate ? 'show' : 'hidden'}`}
        className="text-6xl font-bold"
      >
        {text.map((letter, index) => (
          <motion.span
            variants={item}
            custom={index}
            key={letter + index}
            className="inline-block"
          >
            {letter}
          </motion.span>
        ))}
      </motion.p>
      <button
        onClick={() => setAnimate(!animate)}
        className="px-4 py-1 mt-10 bg-red-500 rounded-full"
      >
        Animate
      </button>
    </div>
  )
}
