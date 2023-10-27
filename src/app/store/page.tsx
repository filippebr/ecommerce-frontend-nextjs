import BreadCrumb from '@/components/BreadCrumb'

export default function OurStore() {
  return (
    <>
      <BreadCrumb title="Our Store" />
      <div className="py-5">
        <div className="grid grid-cols-12 px-4 text-3xl sm:px-8 lg:px-16">
          <div className="col-span-3">
            <div className="mb-1 rounded-lg bg-white px-3 py-4">
              <h3 className="mb-5 text-base font-semibold text-darkgray">
                Shop By Categories
              </h3>
              <div>
                <ul className="cursor-pointer list-none text-sm leading-7 text-lightgray">
                  <li>Watch</li>
                  <li>TV</li>
                  <li>Camera</li>
                  <li>Laptop</li>
                </ul>
              </div>
            </div>
            <div className="mb-1 rounded-lg bg-white px-3 py-4">
              <h3 className="mb-5 text-base font-semibold text-gray">
                Filter by
              </h3>
              <div>
                <h5 className="mb-4 mt-4 text-sm font-semibold text-darkgray">
                  Availability
                </h5>
                <div className="mb-2 text-sm">
                  <input
                    className="mr-2 leading-tight accent-wildwillow shadow-none"
                    type="checkbox"
                    value="inStock"
                  />
                  <label
                    className="text-sm font-semibold text-lightgray"
                    htmlFor="inStock"
                  >
                    In Stock(1)
                  </label>
                </div>
                <div className="m-0 text-sm">
                  <input
                    className="mr-2 leading-tight accent-wildwillow shadow-none"
                    type="checkbox"
                    value="outStock"
                  />
                  <label
                    className="text-sm font-semibold text-lightgray"
                    htmlFor="outStock"
                  >
                    Out of Stock(0)
                  </label>
                </div>
                <h5 className="mb-4 mt-4 text-sm font-semibold text-darkgray">
                  Price
                </h5>
                <div className="flex items-center gap-1 text-sm">
                  <div className="relative">
                    <span className="">$</span>
                    <input
                      type="email"
                      className="placeholder:text-transparent peer p-1 text-xs focus:outline-none"
                      placeholder=""
                      id="floatingInput1"
                      size={10}
                    />
                    <label
                      htmlFor="floatingInput1"
                      className="absolute left-0 ml-2 -translate-y-2 bg-opacity-0 px-1 text-xs duration-100 ease-linear peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-placeholder-shown:text-lightgray peer-focus:ml-0 peer-focus:-translate-y-2 peer-focus:px-1 peer-focus:text-xs"
                    >
                      From
                    </label>
                  </div>
                  <div className="relative">
                    <span className="">$</span>
                    <input
                      type="email"
                      className="placeholder:text-transparent peer p-1 text-xs focus:outline-none"
                      placeholder=""
                      id="floatingInput2"
                      size={10}
                    />
                    <label
                      htmlFor="floatingInput2"
                      className="absolute left-0 ml-2 -translate-y-2 bg-opacity-0 px-1 text-xs duration-100 ease-linear peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-placeholder-shown:text-lightgray peer-focus:ml-0 peer-focus:-translate-y-2 peer-focus:px-1 peer-focus:text-xs"
                    >
                      To
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-1 rounded-lg bg-white px-3 py-4">
              <h3 className="mb-5 text-base font-semibold text-gray">
                Product Tags
              </h3>
            </div>
            <div className="mb-1 rounded-lg bg-white px-3 py-4">
              <h3 className="mb-5 text-base font-semibold text-gray">
                Random Product
              </h3>
            </div>
          </div>
          <div className="col-span-9"></div>
        </div>
      </div>
    </>
  )
}
