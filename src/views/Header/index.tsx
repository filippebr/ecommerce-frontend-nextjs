import React from 'react';

export default function Header() {
  return (
    <>
      <header className="bg-luckypoint">
        <div className="w-full mx-auto py-3 px-6 sm:px-12 lg:px-24">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-md text-hintofyellow">
                Free Shipping Over $100 & Free Returns
              </p>
            </div>
            <div className="text-right">
              <p className="text-md text-hintofyellow">
                Hotline:
                <a className="text-spunpearl" href="tel: +91 8264954234">
                  +91 8264954234
                </a>
              </p>
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
