'use client'
import { usePathname } from 'next/navigation'

import Main from '@/views/Main'

export default function ShowMain() {
  const pathname = usePathname()
  const showMain = pathname !== '/store'

  return <>{showMain && <Main />}</>
}
