export default function ShopByCategories() {
  return (
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
  )
}
