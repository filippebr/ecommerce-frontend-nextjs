import Image from "next/image"
import Link from "next/link"

export default function Main() {
  return (
    <>
      <section>
        <div className="py-5">
          <div className="grid grid-cols-12 items-center px-6 sm:px-12 lg:px-24">
            <div className="col-span-6">
              <div className="relative p-4">
                <Image
                  width="830"
                  height="550"
                  className="rounded-lg"
                  src="/images/main-banner.jpg"
                  alt="main banner"
                ></Image>
                <div className="absolute left-8 top-16">
                  <h4 className="mb-4 font-bold text-luckypoint">
                    SUPERCHARGED FOR PROS
                  </h4>
                  <h5 className="mb-4 text-4xl font-semibold">
                    iPad S13+ Pro.
                  </h5>
                  <p className="mb-4">From $999.00 or $41.62/mo.</p>
                  <Link
                    href=""
                    className="rounded-2xl bg-jacarta px-6 py-2 text-xs font-semibold text-white hover:bg-luckypoint"
                  >
                    BUY NOW
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-span-6">
              <div className="grid grid-cols-12">

                <div className="col-span-6">
                  <div className="relative p-3">
                    <Image
                      width="405"
                      height="265"
                      className="rounded-lg"
                      src="/images/catbanner-01.jpg"
                      alt="small banner"
                    ></Image>
                    <div className="absolute left-2 top-8">
                      <h4 className="mb-2 font-bold text-luckypoint">
                        SUPERCHARGED FOR PROS
                      </h4>
                      <h5 className="mb-2 text-4xl font-semibold">
                        iPad S13+ Pro.
                      </h5>
                      <p className="mb-2">From $999.00 or $41.62/mo.</p>
                      <Link
                        href=""
                        className="rounded-2xl bg-jacarta px-6 py-2 text-xs font-semibold text-white hover:bg-luckypoint"
                      >
                        BUY NOW
                      </Link>
                    </div>
                  </div>
                  <div className="relative p-3">
                    <Image
                      width="405"
                      height="265"
                      className="rounded-lg"
                      src="/images/catbanner-01.jpg"
                      alt="small banner"
                    ></Image>
                    <div className="absolute left-4 top-8">
                      <h4 className="mb-2 font-bold text-luckypoint">
                        SUPERCHARGED FOR PROS
                      </h4>
                      <h5 className="mb-2 text-4xl font-semibold">
                        iPad S13+ Pro.
                      </h5>
                      <p className="mb-2">From $999.00 or $41.62/mo.</p>
                      <Link
                        href=""
                        className="rounded-2xl bg-jacarta px-6 py-2 text-xs font-semibold text-white hover:bg-luckypoint"
                      >
                        BUY NOW
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-span-6">
                  <div className="relative p-3">
                    <Image
                      width="405"
                      height="265"
                      className="rounded-lg"
                      src="/images/catbanner-01.jpg"
                      alt="small banner"
                    ></Image>
                    <div className="absolute left-4 top-8">
                      <h4 className="mb-2 font-bold text-luckypoint">
                        SUPERCHARGED FOR PROS
                      </h4>
                      <h5 className="mb-2 text-4xl font-semibold">
                        iPad S13+ Pro.
                      </h5>
                      <p className="mb-2">From $999.00 or $41.62/mo.</p>
                      <Link
                        href=""
                        className="rounded-2xl bg-jacarta px-6 py-2 text-xs font-semibold text-white hover:bg-luckypoint"
                      >
                        BUY NOW
                      </Link>
                    </div>
                  </div>
                  <div className="relative p-3">
                    <Image
                      width="405"
                      height="265"
                      className="rounded-lg"
                      src="/images/catbanner-01.jpg"
                      alt="small banner"
                    ></Image>
                    <div className="absolute left-4 top-8">
                      <h4 className="mb-2 font-bold text-luckypoint">
                        SUPERCHARGED FOR PROS
                      </h4>
                      <h5 className="mb-2 text-4xl font-semibold">
                        iPad S13+ Pro.
                      </h5>
                      <p className="mb-2">From $999.00 or $41.62/mo.</p>
                      <Link
                        href=""
                        className="rounded-2xl bg-jacarta px-6 py-2 text-xs font-semibold text-white hover:bg-luckypoint"
                      >
                        BUY NOW
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
