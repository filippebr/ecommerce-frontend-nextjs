import Image from 'next/image'
import Link from 'next/link'
import ActionBar from './ActionBar'
import ProductDetails from './ProductDetails'
import ProductImage from './ProductImage'

import { usePathname } from 'next/navigation'

// interface ProductCardProps {
//   gridProps: number
// }

export default function ProductCard() {
  const path = usePathname()

  console.log(path === '/store')
  // console.log(gridProps)

  return (
    <div className={`${path === '/store' ? `col-span-1` : 'col-span-3'}`}>
      <div className="group relative overflow-hidden rounded-lg bg-white p-4">
        {/* Wishlist */}
        <div className="absolute right-5 top-0">
          <Link href={'/'}>
            <Image
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: 'auto', height: 'auto' }}
              src="/images/wish.svg"
              alt="wishlist"
              className="rounded-full p-1 hover:bg-petiteorchid"
            ></Image>
            {/* {grid} */}
          </Link>
        </div>
        {/* Product Image */}
        <ProductImage />
        <ProductDetails />
        {/* Action Bar */}
        <ActionBar />
      </div>
    </div>
  )
}
