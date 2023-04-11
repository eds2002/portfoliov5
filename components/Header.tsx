import React from 'react'
import MagneticButton from './elements/MagneticButton'
import { BsMenuButton } from 'react-icons/bs'
import { IoIosMenu } from 'react-icons/io'
import { useRouter } from 'next/router'

const Header: React.FC = () => {
  const router = useRouter()
  return (
    <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-start w-full px-6 py-4 mx-auto max-w-7xl">
      <div className="flex items-center justify-center w-full text-sm gap-x-8">
        <nav>
          <MagneticButton
            onClick={() => router.push('/about')}
            className="flex flex-col items-center justify-center group"
          >
            <p>About</p>
            <div className="w-1.5 h-1.5 bg-black rounded-full mx-auto group-hover:scale-100 scale-0 transition" />
          </MagneticButton>
        </nav>
      </div>
    </div>
  )
}

export default Header
