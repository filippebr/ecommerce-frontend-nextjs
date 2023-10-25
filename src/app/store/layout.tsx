import Footer from '@/views/Footer'
import Header from '@/views/Header'

export default function StoreLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      {children}
      <h2>Featured products</h2>
      <Footer />
      {/* Carousel of featured products */}
    </>
  )
}
