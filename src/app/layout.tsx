import { Roboto_Flex as Roboto } from 'next/font/google'
import { ReactNode } from 'react'

import Footer from '@/views/Footer'
import '../common/globals.css'

export const metadata = {
  title: 'Ecommerce NextJS 13',
  description: 'Ecommerce following Developers Corner, using Nextjs and Tailwind',
}

const roboto = Roboto({ subsets: ['latin'], variable: "--font-roboto" })

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} font-sans`}>
        <div >
          {/* <Header /> */}
          {/* <Main /> */}
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
