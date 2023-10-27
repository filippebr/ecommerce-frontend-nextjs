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
                <div className="">
                  <input
                    className="mr-2 leading-tight accent-wildwillow shadow-none"
                    type="checkbox"
                    value="inStock"
                  />
                  <label
                    className="mb-4 text-sm font-semibold text-lightgray"
                    htmlFor="inStock"
                  >
                    In Stock(1)
                  </label>
                </div>
                <div className="">
                  <input
                    className="mr-2 leading-tight accent-wildwillow shadow-none"
                    type="checkbox"
                    value="outStock"
                  />
                  <label
                    className="mb-4 text-sm font-semibold text-lightgray"
                    htmlFor="outStock"
                  >
                    Out of Stock(0)
                  </label>
                </div>
                <h5 className="mb-4 mt-4 text-sm font-semibold text-darkgray">
                  Availability
                </h5>
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
