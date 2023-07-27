import Image from 'next/image'

export default function FooterTop() {
  return (
    <>
      <footer className="bg-jacarta py-4 border-b border-waterloo">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-12 items-center">
            <div className="col-span-5">
              <div className="flex gap-5">
                <Image
                  src="/images/newsletter.png"
                  width={33}
                  height={33}
                  alt="newsletter"
                ></Image>
                <h2 className="text-xl mb-0 text-white">
                  Sign Up for Newsletter
                </h2>
              </div>
            </div>
            <div className="col-span-7">
              <div className="text-center mb-0 text-white">
                <div className="flex flex-row">
                  <input
                    type="search"
                    className={
                      `w-full bg-white text-black py-2 pl-3 pr-10 leading-5 border-2 rounded-l-sm border-white placeholder-waterloo sm:text-sm ` +
                      `border-white focus:outline-none focus:ring-petiteorchid focus:border-petiteorchid transition duration-300`
                    }
                    placeholder="Your Email Address"
                    aria-label="Your Email Address"
                    aria-describedby="Email Address"
                  />
                  <div className="bg-wildwillow inset-y-0 right-0 flex items-center px-3 pointer-events-none rounded-r-sm">
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
