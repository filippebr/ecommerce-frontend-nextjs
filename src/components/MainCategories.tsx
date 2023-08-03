import Image from "next/image"

export default function MainCategories() {
  return (
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
            src="/images/smartwatch.jpg"
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
            src="/images/mobile.jpg"
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
  )
}