import Image from "next/image"

export default function MainServices() {
  return (
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
  )
}