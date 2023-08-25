import mainBannerData from "@/data/mainBannersData"
import Image from "next/image"
import Link from "next/link"
import React from "react"

export default function MainBanner() {
  return (
    <section className="py-5">
      <div className="grid grid-cols-4 grid-rows-2 gap-4 items-center px-6 sm:px-12 lg:px-24">
        <div className="col-span-2 row-span-2">

          <div className="relative">
            <Image
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
              className="rounded-lg"
              src="/images/main-banner.jpg"
              alt="main banner"
              priority
            ></Image>
            <div className="absolute left-8 top-16">
              <h4 className="mb-4 font-bold text-luckypoint">
                SUPERCHARGED FOR PROS
              </h4>
              <h5 className="mb-4 text-4xl font-semibold">
                iPad S13+ Pro
              </h5>
              <p className="mb-4 text-sm font-semibold">From $999.00 or $41.62/mo.</p>
              <Link
                href=""
                className="rounded-3xl bg-jacarta px-6 py-3 text-xs font-semibold text-white hover:bg-luckypoint"
              >
                BUY NOW
              </Link>
            </div>
          </div>
        </div>

        {mainBannerData.map((data) => (
          <div key={data.id} className="col-span-1 row-span-1">
            <div className="relative">
              <Image
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
                className="rounded-lg"
                src={data.imageSrc}
                alt="small banner"
              ></Image>
              <div className="absolute left-6 top-12">
                <h4 className="mb-2 text-sm font-bold text-luckypoint">
                  {data.title1}
                </h4>
                <h5 className="mb-2 text-xl font-semibold">
                  {data.title2}
                </h5>
                <p className="mb-2 text-sm font-semibold">
                  {data.text.split('\n').map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </p>
              </div>
            </div>
          </div>
        ))}

      </div>
    </section>
  )
}