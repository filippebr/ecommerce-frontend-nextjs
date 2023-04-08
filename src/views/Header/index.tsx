import Link from 'next/link';
import React from 'react';

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
      <header className="bg-jacarta">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-2 flex justify-center items-center">
            <h2 className="text-4xl">
              <Link href="" className="text-white">
                Dev Corner
              </Link>
            </h2>
          </div>
          <div className="col-span-5">
            <div className="flex flex-row mb-3">
              <input
                type="search"
                className={
                  `w-full py-2 pl-3 pr-10 leading-5 rounded-l-lg border-2 border-white ` +
                  `placeholder-waterloo focus:outline-none focus:ring-blue-500 focus:border-contessa sm:text-sm`
                }
                placeholder="Recipient's username"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <div className="bg-white inset-y-0 right-0 flex items-center px-2 pointer-events-none border-2 rounded-r-lg border-white">
                <span className="text-contessa sm:text-sm" id="basic-addon2">
                  @example.com
                </span>
              </div>
            </div>
          </div>
          <div className="col-span-5"></div>
        </div>
      </header>
      <h1 className="text-3xl flex justify-center items-center">
        Hello from Head
      </h1>
    </>
  );
}
