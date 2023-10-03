import BlogCard from '@/components/BlogCard'
import MainBanner from '@/components/MainBanners'
import MainCategories from '@/components/MainCategories'
import MainMarquee from '@/components/MainMarquee'
import MainServices from '@/components/MainServices'

export default function Main() {
  return (
    <>
      <MainBanner />
      <MainServices />
      <MainCategories />
      <MainMarquee />
      <section className="py-5">
        <div className="grid grid-cols-4 items-center justify-center px-4 text-3xl sm:px-8 lg:px-16">
          <div className="col-span-4">
            <h3 className="mb-8 text-2xl font-semibold">Our latest blog</h3>
          </div>
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </section>
    </>
  )
}
