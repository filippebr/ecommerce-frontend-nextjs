/* eslint-disable prettier/prettier */
'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { FaStar } from 'react-icons/fa'

export default function ProductCard() {
  const [selectedStarCount, setSelectedStarCount] = useState(0)
  const [selectedHoverStarCount, setSelectedHoverStarCount] = useState(0)

  return (
    <div className="col-span-3">
      <div className="rounded-lg bg-white p-4 relative">
        {/* Product Image */}
        <div className="flex justify-center">
          <Image
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: 'auto', height: 'auto' }}
            src="/images/watch.jpg"
            alt="product image"
          ></Image>
        </div>
        {/* Product Details */}
        <div className="space-y-4">
          <h6 className="text-lg text-petiteorchid">Havels</h6>
          <h5 className="text-base text-darkgray">
            Kids headphones bulk 10 pack multi colored for students
          </h5>
          <div className="grid grid-cols-5">
            <div className="flex justify-start">
              {[...Array(5)].map((_, index) => (
                <label htmlFor="" key={index}>
                  <FaStar
                    className={`${index <= selectedStarCount - 1 ? 'text-sushi' : ''
                      } cursor-pointer text-base ${index + 1 <= selectedHoverStarCount ? 'text-sushi' : ''} `}
                    onMouseOver={() => {
                      setSelectedHoverStarCount(index + 1)
                    }}
                    onMouseOut={() => {
                      setSelectedHoverStarCount(0)
                    }}
                    onClick={() => {
                      setSelectedStarCount(index + 1)
                    }}
                  />
                </label>
              ))}
            </div>
          </div>
          {/* <p>Rating Count: {selectedStarCount}</p>
            <p>Hover Rating Count: {selectedHoverStarCount}</p> */}
          <p className="text-lg text-darkgray">$100.00</p>
        </div>
        <div className="top-10 right-[-15px] absolute">
          <div className="flex flex-col">
            <Link
              href={'/'}
            >
              <Image
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: 'auto', height: 'auto' }}
                src="/images/add-cart.svg"
                alt="addcart"
              >
              </Image>
            </Link>
          </div>

        </div>
      </div>
    </div>
  )
}
