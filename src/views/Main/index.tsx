'use client'

import BlogCardList from '@/components/BlogCardList'
import FamousProducts from '@/components/FamousProducts'
import MainBanner from '@/components/Main/MainBanners'
import MainServices from '@/components/Main/MainServices'
import PopularProducts from '@/components/PopularProducts'
import ProductCardList from '@/components/ProductCardList'
import SpecialProductList from '@/components/SpecialProductList'
import { useGrid } from '@/components/StoreProvider'

export default function Main() {
  const { grid } = useGrid()

  return (
    <>
      <MainBanner />
      <MainServices />
      {/* <MainCategories /> */}
      {/* <MainMarquee /> */}
      <section className="py-5">
        <div className="grid grid-cols-12 px-4 text-3xl sm:px-8 lg:px-16">
          <div className="col-span-12">
            <h3 className="mb-8 text-2xl font-semibold">Featured Collection</h3>
          </div>
          <ProductCardList gridProp={grid} count={4} />
        </div>
      </section>
      <FamousProducts />
      {/* Special Products */}
      <section className="py-5">
        <div className="grid grid-cols-12 px-4 text-3xl sm:px-8 lg:px-16">
          <div className="col-span-12">
            <h3 className="mb-8 text-2xl font-semibold">Special Products</h3>
          </div>
          <SpecialProductList count={3} />
        </div>
      </section>
      {/* Our Popular Products */}
      <PopularProducts />

      {/* Blogs */}
      <section className="py-5">
        <div className="grid grid-cols-4 items-center justify-center px-4 text-3xl sm:px-8 lg:px-16">
          <div className="col-span-4">
            <h3 className="mb-8 text-2xl font-semibold">Our latest Blogs</h3>
          </div>
          <BlogCardList count={4} />
        </div>
      </section>
    </>
  )
}
