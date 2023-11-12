import Image from 'next/image'
import Link from 'next/link'
import ActionBar from './ActionBar'
import ProductDetails from './ProductDetails'
import ProductImage from './ProductImage'

import { usePathname } from 'next/navigation'

interface ProductCardProps {
  gridProp: number
}

const ProductCard: React.FC<ProductCardProps> = ({ gridProp }) => {
  const path = usePathname()

  console.log(path === '/store')
  console.log('gridProp: ', gridProp)

  return (
    <div className={`${path === '/store' ? `col-span-1` : 'col-span-3'}`}>
      <div className="group relative overflow-hidden rounded-lg bg-white p-4">
        {/* Wishlist */}
        {gridProp}
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

export default ProductCard
