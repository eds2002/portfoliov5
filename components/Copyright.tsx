import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

export default function Copyright() {
  return (
    <div className="flex items-center justify-center text-black bg-white">
      <Link
        href="https://github.com/eds2002/portfoliov5"
        target={'_blank'}
        className=" w-[20ch] py-6 text-[13px] font-medium text-center opacity-100 hover:opacity-50 transition"
      >
        Designed with love ❤️
        <br />~ Code by Ed
      </Link>
    </div>
  )
}
