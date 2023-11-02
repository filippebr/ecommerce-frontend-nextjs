export default function ProductTags() {
  return (
    <div className="mb-1 rounded-lg bg-white px-3 py-4">
      <h3 className="mb-5 text-base font-semibold text-gray">Product Tags</h3>
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
  )
}
