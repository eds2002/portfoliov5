import Link from 'next/link'
import React from 'react'

export default function Button({
  children,
  className,
  href,
  download,
  ...rest
}: {
  href?: string
  children: React.ReactNode
  className?: string
  download?: boolean
}) {
  const styles = 'px-4 py-2 rounded-full bg-black text-white'
  return (
    <>
      {href ? (
        <Link
          className={`relative block ${styles}`}
          href={href}
          {...rest}
          download
        >
          {children}
        </Link>
      ) : (
        <button className={styles} {...rest}>
          {children}
        </button>
      )}
    </>
  )
}
