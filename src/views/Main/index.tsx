import MainBanner from "@/components/MainBanners"
import Image from "next/image"

export default function Main() {
  return (
    <>
      <MainBanner />
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
          <div className="col-span-1 col-row-1 flex items-center px-2 justify-between">
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

          <div className="col-span-1 col-row-1 flex items-center justify-between px-2">
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

          <div className="col-span-1 col-row-1 flex items-center justify-between px-2">
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

          <div className="col-span-1 col-row-1 flex items-center justify-between px-2">
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
              src="/images/smartwatches.jpg"
              alt="service"
            ></Image>
          </div>

          <div className="col-span-1 col-row-1 flex items-center justify-between px-2">
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
              src="/images/gaming.jpg"
              alt="service"
            ></Image>
          </div>

          <div className="col-span-1 col-row-1 flex items-center justify-between px-2">
            <div className="">
              <h6 className="font-bold">Mobiles & Tablets</h6>
              <p>4 items</p>
            </div>
            <Image
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: 'auto', height: 'auto' }}
              className="rounded-lg"
              src="/images/smartphone_01.jpg"
              alt="service"
            ></Image>
          </div>

          <div className="col-span-1 col-row-1 flex items-center justify-between px-2">
            <div className="">
              <h6 className="font-bold">Headphones</h6>
              <p>4 items</p>
            </div>
            <Image
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: 'auto', height: 'auto' }}
              className="rounded-lg"
              src="/images/headphone.jpg"
              alt="service"
            ></Image>
          </div>

          <div className="col-span-1 col-row-1 flex items-center justify-between px-2">
            <div className="">
              <h6 className="font-bold">Accessories</h6>
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

          <div className="col-span-1 col-row-1 flex items-center justify-between px-2">
            <div className="">
              <h6 className="font-bold">Portable Speakers</h6>
              <p>4 items</p>
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

          <div className="col-span-1 col-row-1 flex items-center justify-between px-2">
            <div className="">
              <h6 className="font-bold">Home Appliances</h6>
              <p>4 items</p>
            </div>
            <Image
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: 'auto', height: 'auto' }}
              className="rounded-lg"
              src="/images/homeapp.jpg"
              alt="service"
            ></Image>
          </div>
        </div>
      </section>
    </>
  )
}
