// import MainBanner from "@/components/MainBanners"
import MainCategories from '@/components/MainCategories'
import Marquee from 'react-fast-marquee'

export default function Main() {
  return (
    <>
      {/* <MainBanner />
      <MainServices /> */}
      <MainCategories />
      <section className="py-5">
        <div className="grid grid-cols-1 items-center px-4 sm:px-8 lg:px-16">
          <div className="marquee-inner-wrapper bg-white shadow-md p-4">
            <Marquee>
              I can be a React Component, multiple React Components,
              or just some text
            </Marquee>
          </div>
        </div>
      </section>
    </>
  )
}
