export const container = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delay: 0,
    },
  },
}

export const item = {
  hidden: { y: '100%' },
  show: { y: 0 },
}
