export const metadata = {
  title: 'Our Store',
  description:
    'Ecommerce following Developers Corner, using Nextjs and Tailwind',
}

export default function StoreLayout(
  { children }: { children: React.ReactNode },
) {
  return (
    <>
      {children}
      {/* Carousel of featured products */}
    </>
  )
}
