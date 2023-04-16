import Link from 'next/link';
import React from 'react';

import HeaderTop from '@/components/HeaderTop';
import HeaderMiddle from '@/components/HeaderMiddle';
import Dropdown from '@/components/Dropdown';

export default function Header() {
  return (
    <>
      <HeaderTop />
      <hr className="text-waterloo" />
      <HeaderMiddle />
      <header className="bg-eastbay">
        <div className="grid grid-cols-12 items-center px-6 sm:px-12 lg:px-24">
          {/* dropdown menu */}
          {/* <div className="col-span-3">
            <Dropdown />
          </div> */}
          <div className="col-span-9 justify-center px-4">
            <div className="flex flex-row items-center p-0">
              <div></div>

              <div className="w-full">
                <div className="flex flex-row items-center justify-between uppercase">
                  <Link
                    className="text-white font-semibold shadow-sm hover:text-spunpearl"
                    href="/"
                  >
                    Home
                  </Link>
                  <Link
                    className="text-white font-semibold shadow-sm hover:text-spunpearl"
                    href="/store"
                  >
                    Our Store
                  </Link>
                  <Link
                    className="text-white font-semibold shadow-sm hover:text-spunpearl"
                    href="/blogs"
                  >
                    Blogs
                  </Link>
                  <Link
                    className="text-white font-semibold shadow-sm hover:text-spunpearl"
                    href="/contact"
                  >
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
