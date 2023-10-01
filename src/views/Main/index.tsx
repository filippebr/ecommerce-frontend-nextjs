// import MainBanner from "@/components/MainBanners"
// import MainCategories from '@/components/MainCategories'
import BlogCard from "@/components/BlogCard"
import MainMarquee from "@/components/MainMarquee"


export default function Main() {
  return (
    <>
      {/* <MainBanner />
      <MainServices /> */}
      {/* <MainCategories /> */}
      <MainMarquee />
      <section className="py-5">
        <div className="text-3xl grid grid-cols-3 justify-center items-center px-4 sm:px-8 lg:px-16">
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </section>
    </>
  )
}
