// import MainBanner from "@/components/MainBanners"
import '@/common/gradient.css'
import MainCategories from '@/components/MainCategories'
import Image from 'next/image'
import Marquee from 'react-fast-marquee'

export default function Main() {
  return (
    <>
      {/* <MainBanner />
      <MainServices /> */}
      <MainCategories />
      <section className="py-5">
        <div className="grid grid-cols-1 items-center px-4 sm:px-8 lg:px-16">
          <div className="marquee-gradient bg-white p-4 shadow-marquee">
            <Marquee className="flex flex-col">
              <div className="mx-8 w-28">
                <Image
                  width={200}
                  height={200}
                  src="/images/brand-01.png"
                  alt="brand"
                >

                </Image>
              </div>
              <div className="mx-8 w-28">
                <Image
                  width={200}
                  height={200}
                  src="/images/brand-02.png"
                  alt="brand"
                >

                </Image>
              </div>
              <div className="mx-8 w-28">
                <Image
                  width={200}
                  height={200}
                  src="/images/brand-03.png"
                  alt="brand"
                >

                </Image>
              </div>
              <div className="mx-8 w-28">
                <Image
                  width={200}
                  height={200}
                  src="/images/brand-04.png"
                  alt="brand"
                >

                </Image>
              </div>
              <div className="mx-8 w-28">
                <Image
                  width={200}
                  height={200}
                  src="/images/brand-05.png"
                  alt="brand"
                >

                </Image>
              </div>
              <div className="mx-8 w-28">
                <Image
                  width={200}
                  height={200}
                  src="/images/brand-06.png"
                  alt="brand"
                >

                </Image>
              </div>
              <div className="mx-8 w-28">
                <Image
                  width={200}
                  height={200}
                  src="/images/brand-07.png"
                  alt="brand"
                >

                </Image>
              </div>
              <div className="mx-8 w-28">
                <Image
                  width={200}
                  height={200}
                  src="/images/brand-08.png"
                  alt="brand"
                >

                </Image>
              </div>
            </Marquee>
          </div>
        </div>
      </section>
    </>
  )
}
