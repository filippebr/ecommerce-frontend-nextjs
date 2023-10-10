'use client'

import Image from 'next/image'
import Link from 'next/link'
import ProductDetails from './ProductDetails'

export default function ProductCard() {
  return (
    <div className="col-span-3">
      {/* Wishlist */}
      <div className="group relative overflow-hidden rounded-lg bg-white p-4">
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
        {/* Product Details */}
        <ProductDetails />
        {/* Action Bar */}
        <div className="transition-right absolute right-[-30px] top-10 duration-300 ease-in-out group-hover:right-5">
          <div className="flex flex-col space-y-4">
            <Link href={'/'}>
              <Image
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: 'auto', height: 'auto' }}
                src="/images/prodcompare.svg"
                alt="prodcompare"
                className="rounded-full p-1 hover:bg-wildwillow"
              ></Image>
            </Link>
            <Link href={'/'}>
              <Image
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: 'auto', height: 'auto' }}
                src="/images/view.svg"
                alt="view"
                className="rounded-full p-1 hover:bg-wildwillow"
              ></Image>
            </Link>
            <Link href={'/'}>
              <Image
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: 'auto', height: 'auto' }}
                src="/images/add-cart.svg"
                alt="addcart"
                className="rounded-full p-1 hover:bg-wildwillow"
              ></Image>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
