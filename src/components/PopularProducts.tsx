'use client'

import ProductCard from './ProductCard'
import { useGrid } from './StoreProvider'

export default function PopularProducts() {
  const { grid } = useGrid()

  return (
    <section className="py-5">
      <div className="grid grid-cols-12 px-4 text-3xl sm:px-8 lg:px-16">
        <div className="col-span-12">
          <h3 className="mb-8 text-2xl font-semibold">Our Popular Products</h3>
        </div>
      </div>
      <div className="grid grid-cols-12 px-4 text-3xl sm:px-8 lg:px-16">
        <ProductCard gridProp={grid} />
        <ProductCard gridProp={grid} />
        <ProductCard gridProp={grid} />
        <ProductCard gridProp={grid} />
      </div>
    </section>
  )
}
