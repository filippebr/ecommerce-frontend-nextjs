export default function StoreLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
      <h2>Featured products</h2>
      {/* Carousel of featured products */}
    </>
  )
}
