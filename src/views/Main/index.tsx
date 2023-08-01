import Image from "next/image"
import Link from "next/link"

export default function Main() {
  return (
    <>
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
      <section className="py-5">
        <div className="grid grid-cols-5 items-center px-4 sm:px-8 lg:px-16">

          <div className="col-span-1 flex items-center gap-2">
            <Image
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: 'auto', height: 'auto' }}
              className="rounded-lg"
              src="/images/service.png"
              alt="service"
            ></Image>
            <div className="">
              <h6 className="font-bold">Free Shipping</h6>
              <p>From all orders over $5</p>
            </div>
          </div>
          <div className="col-span-1 flex items-center gap-2">
            <Image
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: 'auto', height: 'auto' }}
              className="rounded-lg"
              src="/images/service-02.png"
              alt="service"
            ></Image>
            <div className="">
              <h6 className="font-bold">Daily Surprise Offers</h6>
              <p>Save up to 25% off</p>
            </div>
          </div>
          <div className="col-span-1 flex items-center gap-2">
            <Image
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: 'auto', height: 'auto' }}
              className="rounded-lg"
              src="/images/service-03.png"
              alt="service"
            ></Image>
            <div className="">
              <h6 className="font-bold">Support 24/7</h6>
              <p>Shop with a expert</p>
            </div>
          </div>
          <div className="col-span-1 flex items-center gap-2">
            <Image
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: 'auto', height: 'auto' }}
              className="rounded-lg"
              src="/images/service-04.png"
              alt="service"
            ></Image>
            <div className="">
              <h6 className="font-bold">Affordable Prices</h6>
              <p>Get Factory Default Price</p>
            </div>
          </div>
          <div className="col-span-1 flex items-center gap-2">
            <Image
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: 'auto', height: 'auto' }}
              className="rounded-lg"
              src="/images/service-05.png"
              alt="service"
            ></Image>
            <div className="">
              <h6 className="font-bold">Secure Payments</h6>
              <p>100% Protected Payment</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="grid grid-cols-5 grid-rows-2 items-center px-4 sm:px-8 lg:px-16">
          <div className="col-span-1 col-row-1 flex items-center">
            <div className="">
              <h6 className="font-bold">Computers and Laptop</h6>
              <p>8 items</p>
            </div>
            <Image
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: 'auto', height: 'auto' }}
              className="rounded-lg"
              src="/images/laptop.jpg"
              alt="service"
            ></Image>
          </div>

          <div className="col-span-1 col-row-1 flex items-center">
            <div className="">
              <h6 className="font-bold">Cameras & Videos</h6>
              <p>8 items</p>
            </div>
            <Image
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: 'auto', height: 'auto' }}
              className="rounded-lg"
              src="/images/camera.jpg"
              alt="service"
            ></Image>
          </div>

          <div className="col-span-1 col-row-1 flex items-center">
            <div className="">
              <h6 className="font-bold">Smart Television</h6>
              <p>12 items</p>
            </div>
            <Image
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: 'auto', height: 'auto' }}
              className="rounded-lg"
              src="/images/tv.jpg"
              alt="service"
            ></Image>
          </div>

          <div className="col-span-1 col-row-1 flex items-center">
            <div className="">
              <h6 className="font-bold">Smartwatches</h6>
              <p>8 items</p>
            </div>
            <Image
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: 'auto', height: 'auto' }}
              className="rounded-lg"
              src="/images/speaker.jpg"
              alt="service"
            ></Image>
          </div>

          <div className="col-span-1 col-row-1 flex items-center">
            <div className="">
              <h6 className="font-bold">Music & Gaming</h6>
              <p>4 items</p>
            </div>
            <Image
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: 'auto', height: 'auto' }}
              className="rounded-lg"
              src="/images/acc.jpg"
              alt="service"
            ></Image>
          </div>
        </div>
      </section>
    </>
  )
}
