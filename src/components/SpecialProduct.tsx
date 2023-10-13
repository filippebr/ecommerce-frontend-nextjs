/* eslint-disable prettier/prettier */
'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { FaStar } from 'react-icons/fa'

export default function SpecialProduct() {
  const [selectedStarCount, setSelectedStarCount] = useState(0)
  const [selectedHoverStarCount, setSelectedHoverStarCount] = useState(0)

  return (
    <div className="col-span-4">
      <div className="rounded-lg p-3">
        <div className="flex justify-between">
          <div>
            <Image
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: 'auto', height: 'auto' }}
              src="/images/watch.jpg"
              alt="watch"
            ></Image>
          </div>
          <div className="space-y-4">
            <h5 className="text-lg text-petiteorchid font-semibold">Havels</h5>
            <h6 className="text-base text-darkgray font-semibold">
              Samsung Galaxy Note10+ Mobile Phone; Sim...
            </h6>
            <div className="grid grid-cols-5">
              <div className="flex justify-start">
                {[...Array(5)].map((_, index) => (
                  <label htmlFor="" key={index}>
                    <FaStar
                      className={`${index <= selectedStarCount - 1 ? 'text-sushi' : ''
                        } cursor-pointer ${index + 1 <= selectedHoverStarCount ? 'text-sushi' : ''
                        }`}
                      onMouseOver={() => {
                        setSelectedHoverStarCount(index + 1)
                      }}
                      onMouseOut={() => {
                        setSelectedHoverStarCount(0)
                      }}
                      onClick={() => {
                        setSelectedStarCount(index + 1)
                      }}
                      size={20}
                    />
                  </label>
                ))}
              </div>
            </div>
            <p className="text-lg text-darkgray">
              <span className="text-stiletto">$100.00</span>{' '}<s>$200</s>
            </p>
            <div className="flex flex-row items-center text-base font-semibold space-x-2">
              <p className="mb-0">
                <b>5 </b>days
              </p>
              <div className="flex gap-3 items-center">
                <span className="py-1 px-3 rounded-full bg-contessa">1</span>:
                <span className="py-1 px-3 rounded-full bg-contessa">1</span>:
                <span className="py-1 px-3 rounded-full bg-contessa">1</span>
              </div>
            </div>
            <div className="flex flex-col text-base space-y-4">
              <p>Products: 5</p>
              <div className="w-1/4 bg-lightgray rounded-full h-4 dark:bg-darkgray">
                <div className="bg-waterloo h-4 rounded-full" style={{ width: "50%" }}></div>
              </div>
              <Link
                href="/"
                className="w-1/4 rounded-3xl bg-jacarta hover:bg-eastbay px-4 py-2 text-lg text-white"
              >
                Add to Cart
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
