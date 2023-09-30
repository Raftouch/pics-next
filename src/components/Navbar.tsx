'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()

  return (
    <div className="w-screen h-[80px] bg-slate-100 flex justify-between items-center p-5">
      <Link href="/" className={pathname === '/' ? 'text-green-600' : ''}>
        Home
      </Link>
      <div className="flex gap-5">
        <Link
          href="/static"
          className={pathname === '/static' ? 'text-green-600' : ''}
        >
          Static
        </Link>
        <Link
          href="/dynamic"
          className={pathname === '/dynamic' ? 'text-green-600' : ''}
        >
          Dynamic
        </Link>
        <Link
          href="/isr"
          className={pathname === '/isr' ? 'text-green-600' : ''}
        >
          ISR
        </Link>
      </div>
    </div>
  )
}
