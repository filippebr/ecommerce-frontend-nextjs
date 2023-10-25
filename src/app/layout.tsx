import { Roboto_Flex as Roboto } from 'next/font/google'
import { ReactNode } from 'react'

import Footer from '@/views/Footer'
import Header from '@/views/Header'
import Main from '@/views/Main'
import '../common/globals.css'

export const metadata = {
  title: 'Ecommerce NextJS 13',
  description:
    'Ecommerce following Developers Corner, using Nextjs and Tailwind',
}

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })

export default function RootLayout({ children }: { children: ReactNode }) {
  const isStorePage = typeof window !== 'undefined' && window.location.pathname === '/store/page'

  return (
    <html lang="en">
      <body className={`${roboto.variable} font-sans`}>
        <div>
          <Header />
          {!isStorePage && <Main />}
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
