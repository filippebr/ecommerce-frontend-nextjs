import MainMarquee from '@/components/MainMarquee'
import ProductCard from '@/components/ProductCard'
import SpecialProduct from '@/components/SpecialProduct'
import Image from 'next/image'

export default function Main() {
  return (
    <>
      {/* <MainBanner />
      <MainServices />
      <MainCategories /> */}
      <MainMarquee />
      <section className="py-5">
        <div className="grid grid-cols-12 px-4 text-3xl sm:px-8 lg:px-16">
          <div className="col-span-12">
            <h3 className="mb-8 text-2xl font-semibold">Featured Collection</h3>
          </div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </section>
      {/* Famous Products */}
      <section className="py-5">
        <div className="grid grid-cols-12 px-4 text-3xl sm:px-8 lg:px-16">
          <div className="col-span-3">
            <div className="relative mb-8 font-semibold">
              <div className="bg-black text-white">
                <div className="absolute left-8 top-8">
                  <h5 className="text-sm">BIG SCREEN</h5>
                  <h6 className="text-xl">Smart Watch Series 7</h6>
                  <p className="text-base">From $399or $16.62/mo. for mo.*</p>
                </div>
                <Image
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: 'auto', height: 'auto' }}
                  src="/images/smartwatches.jpg"
                  alt="smartwatches"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="grid grid-cols-12 px-4 text-3xl sm:px-8 lg:px-16">
          <div className="col-span-12">
            <h3 className="mb-8 text-2xl font-semibold">Special Products</h3>
          </div>
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
        </div>
      </section>
      {/* Our Popular Products */}
      <section className="py-5">
        <div className="grid grid-cols-12 px-4 text-3xl sm:px-8 lg:px-16">
          <div className="col-span-12">
            <h3 className="mb-8 text-2xl font-semibold">
              Our Popular Products
            </h3>
          </div>
        </div>
        <div className="grid grid-cols-12 px-4 text-3xl sm:px-8 lg:px-16">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </section>
      {/* <section className="py-5">
        <div className="grid grid-cols-4 items-center justify-center px-4 text-3xl sm:px-8 lg:px-16">
          <div className="col-span-4">
            <h3 className="mb-8 text-2xl font-semibold">Our latest Blogs</h3>
          </div>
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </section> */}
    </>
  )
}
