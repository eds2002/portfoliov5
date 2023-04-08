import Link from 'next/link'
import React from 'react'
import Button from '../elements/Button'

export default function Header() {
  const links = [
    {
      name: 'Home',
      href: '/',
    },
    {
      name: 'Works',
      href: '/works',
    },
  ]
  return (
    <header className="py-3">
      <div className="flex items-center justify-between w-full h-full px-4 mx-auto max-w-7xl">
        <h1>Ed</h1>
        <nav className="flex items-center justify-between gap-x-3">
          {links.map((link) => (
            <Link href={link.href} key={link.name}>
              <p>* {link.name}</p>
            </Link>
          ))}
        </nav>
        <Button href="/favicon.ico" download>
          Resume
        </Button>
      </div>
    </header>
  )
}
