import Image from "next/image"
import Link from "next/link"

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
            ></Image>
            <div className="absolute left-8 top-16">
              <h4 className="mb-4 font-bold text-luckypoint">
                SUPERCHARGED FOR PROS
              </h4>
              <h5 className="mb-4 text-4xl font-semibold">
                iPad S13+ Pro
              </h5>
              <p className="mb-4 text-sm">From $999.00 or $41.62/mo</p>
              <Link
                href=""
                className="rounded-3xl bg-jacarta px-6 py-3 text-xs font-semibold text-white hover:bg-luckypoint"
              >
                BUY NOW
              </Link>
            </div>
          </div>
        </div>

        <div className="col-span-1 row-span-1">
          <div className="relative">
            <Image
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
              className="rounded-lg"
              src="/images/catbanner-01.jpg"
              alt="small banner"
            ></Image>
            <div className="absolute left-6 top-12">
              <h4 className="mb-2 text-sm font-bold text-luckypoint">
                BEST SALE
              </h4>
              <h5 className="mb-2 text-xl font-semibold">
                Laptops Max
              </h5>
              <p className="mb-2 text-sm">From $1699.00 <br />or $41.62/mo.</p>
            </div>
          </div>
        </div>

        <div className="col-span-1 row-span-1">
          <div className="relative">
            <Image
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
              className="rounded-lg"
              src="/images/catbanner-02.jpg"
              alt="small banner"
            ></Image>
            <div className="absolute left-6 top-12">
              <h4 className="mb-2 text-xs font-bold text-luckypoint">
                15% OFF
              </h4>
              <h5 className="mb-2 text-xl font-semibold">
                Smartwatch 7
              </h5>
              <p className="mb-2 text-sm">Shop the latest band <br />styles and colors</p>
            </div>
          </div>
        </div>

        <div className="col-span-1 row-span-1">
          <div className="relative">
            <Image
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
              className="rounded-lg"
              src="/images/catbanner-03.jpg"
              alt="small banner"
            ></Image>
            <div className="absolute left-6 top-12">
              <h4 className="mb-2 text-xs font-bold text-luckypoint">
                NEW ARRIVAL
              </h4>
              <h5 className="mb-2 text-xl font-semibold">
                Buy IPad Air
              </h5>
              <p className="mb-2 text-sm">From $599 or<br />$49.91/mo. for 12 mo. *</p>
            </div>
          </div>
        </div>

        <div className="col-span-1 row-span-1">
          <div className="relative">
            <Image
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
              className="rounded-lg"
              src="/images/catbanner-04.jpg"
              alt="small banner"
            ></Image>
            <div className="absolute left-6 top-12">
              <h4 className="mb-2 text-xs font-bold text-luckypoint">
                FREE ENGRAVING
              </h4>
              <h5 className="mb-2 text-xl font-semibold">
                AirPods Max
              </h5>
              <p className="mb-2 text-sm">High-fidelity playback & <br /> ultra-low distortion</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}