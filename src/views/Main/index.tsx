import FamousProducts from '@/components/FamousProducts'
import MainBanner from '@/components/MainBanners'
import MainServices from '@/components/MainServices'
import ProductCard from '@/components/ProductCard'
import SpecialProduct from '@/components/SpecialProduct'

export default function Main() {
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
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </section>
      {/* Famous Products */}
      <FamousProducts />
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
