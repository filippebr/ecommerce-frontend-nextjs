import Link from 'next/link';
import React from 'react';
import { BsSearch } from 'react-icons/bs';
import { MdCompareArrows } from 'react-icons/md';
import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from 'react-icons/ai';

export default function Header() {
  return (
    <>
      <header className="bg-jacarta">
        <div className="w-full mx-auto py-3 px-6 sm:px-12 lg:px-24">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-hintofyellow">
                Free Shipping Over $100 & Free Returns
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm text-hintofyellow">
                Hotline:
                <a className="text-spunpearl" href="tel: +91 8264954234">
                  +91 8264954234
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <hr className="text-waterloo" />
      <header className="bg-jacarta">
        <div className="grid grid-cols-12 gap-4 p-4 align-middle items-center">
          <div className="col-span-2 flex justify-center items-center">
            <h2 className="text-4xl">
              <Link href="" className="text-white">
                Dev Corner
              </Link>
            </h2>
          </div>
          <div className="col-span-5">
            <div className="flex flex-row">
              <input
                type="search"
                className={
                  `w-full py-2 pl-3 pr-10 leading-5 border-2 rounded-l-sm border-white placeholder-waterloo sm:text-sm ` +
                  `border-white focus:outline-none focus:ring-spunpearl focus:border-spunpearl transition duration-500`
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
          <div className="col-span-5 mr-24">
            <div className="flex flex-row items-center justify-between mx-8">
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
      <header className="bg-jacarta">
        <div className="grid grid-cols-12 gap-4 p-4 items-center">
          <div className="col-span-12">
            <div className="flex flex-row items-center">
              <div></div>
              <div className="">
                <div className="flex flex-row items-center justify-between">
                  <Link className="text-white" href="/">
                    Home
                  </Link>
                  <Link className="text-white" href="/store">
                    Our Store
                  </Link>
                  <Link className="text-white" href="/blogs">
                    Blogs
                  </Link>
                  <Link className="text-white" href="/contact">
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <h1 className="text-3xl flex justify-center items-center">
        Hello from Head
      </h1>
    </>
  );
}
