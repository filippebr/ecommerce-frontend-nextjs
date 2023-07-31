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
      <div className="grid grid-cols-12 gap-4 py-5 align-middle items-center px-6 sm:px-12 lg:px-24">
        <div className="col-span-2 flex">
          <h2 className="sm:xl md:2xl lg:text-4xl">
            <Link href="" className="text-white">
              Developer's Web
            </Link>
          </h2>
        </div>
        <div className="col-span-5">
          <div className="flex flex-row">
            <input
              type="search"
              className={
                `w-full bg-white py-2 pl-3 pr-10 leading-5 border-2 rounded-l-sm border-white placeholder-waterloo sm:text-sm ` +
                `border-white focus:outline-none focus:ring-petiteorchid focus:border-petiteorchid transition duration-300`
              }
              placeholder="Search Product Here..."
              aria-label="search Product Here..."
              aria-describedby="search..."
            />
            <div className="bg-wildwillow inset-y-0 right-0 flex items-center px-3 pointer-events-none rounded-r-sm">
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
                <div className="flex flex-col items-center justify-center text-white ml-2">
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
                <div className="flex flex-col items-center justify-center text-white ml-2">
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
                <div className="flex flex-col items-center justify-center text-white ml-2">
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
                <div className="flex flex-col items-center justify-center text-black ml-2">
                  <span className="bg-white px-2 rounded-full ml-2">100</span>
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
