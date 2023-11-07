import Image from 'next/image'

import BreadCrumb from '@/components/BreadCrumb'

import ProductTags from '@/components/ProductTags'
import RandomProduct from '@/components/RandomProduct'
import ShopByCategories from '@/components/ShopByCategories'
import hamburgerGridStoreData from '@/data/hamburgerGridStoreData'
import FilterBy from '../../components/FilterBy'

export default function OurStore() {
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
                  <p className="mb-0 block">Sort By:</p>
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
                        key={data.id}
                        width={100}
                        height={100}
                        sizes="100vw"
                        // style={{ width: data.width, height: data.height }}
                        className="px-2"
                        src={data.src}
                        alt="grid"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
