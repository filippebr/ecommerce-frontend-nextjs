import { Roboto_Flex as Roboto } from 'next/font/google'
import { ReactNode } from 'react'

import Footer from '@/views/Footer'
import Header from '@/views/Header'
import ShowMain from '@/views/ShowMain'
import '../common/globals.css'

export const metadata = {
  title: 'Ecommerce NextJS 13',
  description:
    'Ecommerce following Developers Corner, using Nextjs and Tailwind',
}

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} font-sans`}>
        <div>
          <Header />
          <ShowMain />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
