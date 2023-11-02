import BreadCrumb from '@/components/BreadCrumb'
import RatingStar from '@/lib/common-components/RatingStar'
import Image from 'next/image'

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
                      className="absolute left-0 ml-2 -translate-y-1 bg-opacity-0 px-1 text-xs duration-100 ease-linear peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-placeholder-shown:text-lightgray peer-focus:ml-0 peer-focus:-translate-y-2 peer-focus:px-1 peer-focus:text-xs"
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
                      className="absolute left-0 ml-2 -translate-y-1 bg-opacity-0 px-1 text-xs duration-100 ease-linear peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-placeholder-shown:text-lightgray peer-focus:ml-0 peer-focus:-translate-y-2 peer-focus:px-1 peer-focus:text-xs"
                    >
                      To
                    </label>
                  </div>
                </div>
                <h5 className="mb-4 mt-4 text-sm font-semibold text-darkgray">
                  Colors
                </h5>
                <div>
                  <div>
                    <ul className="flex list-none flex-wrap space-x-1 ps-0">
                      <li className="h-5 w-5 rounded-full bg-red"></li>
                      <li className="h-5 w-5 rounded-full bg-red"></li>
                      <li className="h-5 w-5 rounded-full bg-red"></li>
                      <li className="h-5 w-5 rounded-full bg-red"></li>
                      <li className="h-5 w-5 rounded-full bg-red"></li>
                      <li className="h-5 w-5 rounded-full bg-red"></li>
                      <li className="h-5 w-5 rounded-full bg-red"></li>
                      <li className="h-5 w-5 rounded-full bg-red"></li>
                      <li className="h-5 w-5 rounded-full bg-red"></li>
                      <li className="h-5 w-5 rounded-full bg-red"></li>
                      <li className="h-5 w-5 rounded-full bg-red"></li>
                      <li className="h-5 w-5 rounded-full bg-red"></li>
                    </ul>
                  </div>
                </div>
                <h5 className="mb-4 mt-4 text-sm font-semibold text-darkgray">
                  Size
                </h5>
                <div className="mb-2 text-sm">
                  <input
                    className="mr-2 leading-tight accent-wildwillow shadow-none"
                    type="checkbox"
                    value=""
                    id="color-1"
                  />
                  <label
                    className="text-sm font-semibold text-lightgray"
                    htmlFor="color-1"
                  >
                    S (2)
                  </label>
                </div>
                <div className="mb-2 text-sm">
                  <input
                    className="mr-2 leading-tight accent-wildwillow shadow-none"
                    type="checkbox"
                    value=""
                    id="color-2"
                  />
                  <label
                    className="text-sm font-semibold text-lightgray"
                    htmlFor="color-2"
                  >
                    M (2)
                  </label>
                </div>
              </div>
            </div>
            <div className="mb-1 rounded-lg bg-white px-3 py-4">
              <h3 className="mb-5 text-base font-semibold text-gray">
                Product Tags
              </h3>
              <div>
                <div className="product-tags flex flex-wrap items-center gap-2 text-sm">
                  <span className="rounded-lg bg-white px-2 py-1 text-darkgray">
                    Headphone
                  </span>
                  <span className="rounded-lg bg-white px-2 py-1 text-darkgray">
                    Laptop
                  </span>
                  <span className="rounded-lg bg-white px-2 py-1 text-darkgray">
                    Mobile
                  </span>
                  <span className="rounded-lg bg-white px-2 py-1 text-darkgray">
                    Wire
                  </span>
                </div>
              </div>
            </div>
            <div className="mb-1 rounded-lg bg-white px-3 py-4">
              <h3 className="mb-5 text-base font-semibold text-gray">
                Random Product
              </h3>
              <div>
                <div className="flex border-b-[1px]">
                  <div className="w-36border-darkgray">
                    <Image
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: 'auto', height: 'auto' }}
                      src="/images/watch.jpg"
                      alt="watch"
                      className="rounded-full p-1"
                    ></Image>
                  </div>
                  <div className="w-36 text-base">
                    <h5 className="mb-2">
                      Kids headphones bulk 10 pack multi colored for students
                    </h5>
                    <div className="flex flex-row">
                      <RatingStar sizeProp={14} />
                    </div>
                    <b>$ 300</b>
                  </div>
                </div>
                <div className="flex border-b-[1px]">
                  <div className="w-36 border-b-[1px] border-darkgray">
                    <Image
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: 'auto', height: 'auto' }}
                      src="/images/watch.jpg"
                      alt="watch"
                      className="rounded-full p-1"
                    ></Image>
                  </div>
                  <div className="w-36 text-base">
                    <h5 className="mb-2">
                      Kids headphones bulk 10 pack multi colored for students
                    </h5>
                    <div className="flex flex-row">
                      <RatingStar sizeProp={14} />
                    </div>
                    <b>$ 300</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-9 text-xl">
            <div className="rounded-lg bg-white p-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <p className="mb-0 block">Sort By:</p>
                  <select name="" className="" id="">
                    <option value="">Featured</option>
                    <option value="">Best selling</option>
                    <option value="">Alphabetically, A-Z</option>
                    <option value="">Alphabetically, Z-A</option>
                    <option value="">Price, low to high</option>
                    <option value="">Price, high to low</option>
                    <option value="">Date, old to new</option>
                    <option value="">Date, new to old</option>
                  </select>
                </div>
                <div className="flex items-center gap-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
