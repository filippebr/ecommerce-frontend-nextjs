import Link from 'next/link'

import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from 'react-icons/ai'
import { BsSearch } from 'react-icons/bs'
import { MdCompareArrows } from 'react-icons/md'

export default function HeaderMiddle() {
  return (
    <header className="bg-jacarta">
      <div className="grid grid-cols-12 items-center gap-4 px-6 py-5 align-middle sm:px-12 lg:px-24">
        <div className="col-span-2 flex">
          <h2 className="sm:xl md:2xl lg:text-4xl">
            <Link href="" className="text-white">
              Developer&apos;s Web
            </Link>
          </h2>
        </div>
        <div className="col-span-5">
          <div className="flex flex-row">
            <input
              type="search"
              className={
                `w-full rounded-l-sm border-2 border-white bg-white py-2 pl-3 pr-10 leading-5 placeholder-waterloo sm:text-sm ` +
                `border-white transition duration-300 focus:border-petiteorchid focus:outline-none focus:ring-petiteorchid`
              }
              placeholder="Search Product Here..."
              aria-label="search Product Here..."
              aria-describedby="search..."
            />
            <div className="pointer-events-none inset-y-0 right-0 flex items-center rounded-r-sm bg-wildwillow px-3">
              <a href="#" className="">
                <div className="text-xl text-black">
                  <BsSearch className="fs-10" />
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="col-span-5 px-6">
          <div className="flex flex-row items-center justify-between">
            <div>
              <Link
                className="flex flex-row items-center justify-center"
                href=""
              >
                <MdCompareArrows className="text-5xl text-deco" />
                <div className="ml-2 flex flex-col items-center justify-center text-white">
                  <span>Compare</span>
                  <span>Products</span>
                </div>
              </Link>
            </div>
            <div>
              <Link
                className="flex flex-row items-center justify-center"
                href=""
              >
                <AiOutlineHeart className="text-5xl text-stiletto" />
                <div className="ml-2 flex flex-col items-center justify-center text-white">
                  <span>Favorite</span>
                  <span>Wishlist</span>
                </div>
              </Link>
            </div>
            <div>
              <Link
                className="flex flex-row items-center justify-center"
                href=""
              >
                <AiOutlineUser className="text-5xl text-deco" />
                <div className="ml-2 flex flex-col items-center justify-center text-white">
                  <span>Login</span>
                  <span>My account</span>
                </div>
              </Link>
            </div>
            <div>
              <Link
                className="flex flex-row items-center justify-center"
                href=""
              >
                <AiOutlineShoppingCart className="text-5xl text-deco" />
                <div className="ml-2 flex flex-col items-center justify-center text-black">
                  <span className="ml-2 rounded-full bg-white px-2">100</span>
                  <span className="text-white">$ 500</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
