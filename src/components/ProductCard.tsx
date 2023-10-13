'use client'

import Image from 'next/image'
import Link from 'next/link'
import ActionBar from './ActionBar'
import ProductDetails from './ProductDetails'
import ProductImage from './ProductImage'

export default function ProductCard() {
  return (
    <div className="col-span-3">
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
