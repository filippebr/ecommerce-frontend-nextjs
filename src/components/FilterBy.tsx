export default function FilterBy() {
  return (
    <div className="mb-1 rounded-lg bg-white px-3 py-4">
      <h3 className="mb-5 text-base font-semibold text-gray">Filter by</h3>
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
        <h5 className="mb-4 mt-4 text-sm font-semibold text-darkgray">Price</h5>
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
        <h5 className="mb-4 mt-4 text-sm font-semibold text-darkgray">Size</h5>
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
  )
}
