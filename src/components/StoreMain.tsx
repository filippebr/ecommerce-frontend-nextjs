'use client'

import hamburgerGridStoreData from '@/data/hamburgerGridStoreData'
import Image from 'next/image'
import BreadCrumb from './BreadCrumb'
import FilterBy from './FilterBy'
import ProductCard from './ProductCard'
import ProductTags from './ProductTags'
import RandomProduct from './RandomProduct'
import ShopByCategories from './ShopByCategories'

import { useGrid } from './StoreProvider'

export default function StoreMain() {
  const { grid, setGrid } = useGrid()

  return (
    <>
      <BreadCrumb title="Our Store" />
      <div className="py-5">
        <div className="grid grid-cols-12 px-4 text-3xl sm:px-8 lg:px-16">
          <div className="col-span-3">
            <ShopByCategories />
            <FilterBy />
            <ProductTags />
            <RandomProduct />
          </div>
          <div className="col-span-9 text-xl">
            <div className="rounded-lg bg-white p-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <p className="mb-0 mr-2 block" style={{ width: '100px' }}>
                    Sort By:
                  </p>
                  <select name="" className="" id="">
                    <option value="">Featured</option>
                    <option value="">Best selling</option>
                    <option value="">Alphabetically, A-Z</option>
                    <option value="">Alphabetically, Z-A</option>
                    <option value="">Price, low to high</option>
                    <option value="">Price, high to low</option>
                    <option value="">Date, old to new</option>
                    <option value="">Date, new to old</option>
                  </select>
                </div>
                <div className="flex items-center gap-2">
                  <p className="totalproducts">21 Products</p>
                  <div className="flex items-center gap-2">
                    {hamburgerGridStoreData.map((data) => (
                      <Image
                        onClick={() => {
                          setGrid(data.id + 1)
                        }}
                        key={data.id}
                        width={42}
                        height={42}
                        sizes="100vw"
                        // style={{ width: data.width, height: data.height }}
                        className="cursor-pointer px-3 py-2 hover:rounded-md hover:bg-spunpearl"
                        src={data.src}
                        alt="grid"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="products-list grid grid-cols-12 pb-5">
              <ProductCard gridProp={grid} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
