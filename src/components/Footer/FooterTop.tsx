import Image from 'next/image'

export default function FooterTop() {
  return (
    <>
      <footer className="border-b border-waterloo bg-jacarta py-4">
        <div className="mx-auto w-full px-6 py-3 sm:px-12 lg:px-24">
          <div className="grid grid-cols-12 items-center">
            <div className="col-span-4">
              <div className="flex gap-5">
                <Image
                  src="/images/newsletter.png"
                  width={33}
                  height={33}
                  alt="newsletter"
                ></Image>
                <h2 className="mb-0 text-xl text-white">
                  Sign Up for Newsletter
                </h2>
              </div>
            </div>
            <div className="col-span-8">
              <div className="mb-0 text-center text-white">
                <div className="flex flex-row">
                  <input
                    type="search"
                    className={
                      `w-full rounded-l-sm border-2 border-white bg-white py-2 pl-3 pr-10 leading-5 text-black placeholder-waterloo sm:text-sm ` +
                      `border-white transition duration-300 focus:border-petiteorchid focus:outline-none focus:ring-petiteorchid`
                    }
                    placeholder="Your Email Address"
                    aria-label="Your Email Address"
                    aria-describedby="Email Address"
                  />
                  <div className="pointer-events-none inset-y-0 right-0 flex items-center rounded-r-sm bg-wildwillow px-3">
                    <a href="#" className="">
                      <div className="text-xl text-black">Subscribe</div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
