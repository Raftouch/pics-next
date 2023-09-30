'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()

  return (
    <div className="w-screen h-[80px] bg-slate-100 flex justify-between items-center p-5">
      <span>Logo</span>
      <div className="flex gap-5">
        <Link href="/" className={pathname === '/' ? 'text-green-600' : ''}>
          Home
        </Link>
        <Link
          href="/about"
          className={pathname === '/static' ? 'text-green-600' : ''}
        >
          Static
        </Link>
      </div>
    </div>
  )
}
