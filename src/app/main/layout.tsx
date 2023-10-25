import Main from '@/views/Main'

export default function StoreLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Main />
      {children}
      <h2>Featured products</h2>
      {/* Carousel of featured products */}
    </>
  )
}
