'use client'

import Image from 'next/image'
import Link from 'next/link'
import ActionBar from './ActionBar'
import ProductDetails from './ProductDetails'

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
        <div className="flex justify-center">
          <Image
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: 'auto', height: 'auto' }}
            src="/images/watch.jpg"
            alt="product image"
            className="block cursor-pointer group-hover:hidden"
          ></Image>
          <Image
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: 'auto', height: 'auto' }}
            src="/images/smartwatch_square.jpg"
            alt="product image"
            className="hidden cursor-pointer group-hover:block"
          ></Image>
        </div>
        <ProductDetails />
        {/* Action Bar */}
        <ActionBar />
      </div>
    </div>
  )
}
