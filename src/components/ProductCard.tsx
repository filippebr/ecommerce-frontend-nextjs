/* eslint-disable prettier/prettier */
'use client'

import Image from 'next/image'
import { useState } from 'react'
import { FaStar } from 'react-icons/fa'

export default function ProductCard() {
  const [selectedStarCount, setSelectedStarCount] = useState(0)
  const [selectedHoverStarCount, setSelectedHoverStarCount] = useState(0)

  return (
    <div className="col-span-3 grid grid-cols-5 grid-rows-1 justify-start">
      <div className="rounded-lg bg-white p-4">
        <div>
          <Image
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: 'auto', height: 'auto' }}
            src="/images/watch.jpg"
            alt="product image"
          ></Image>
          <div className="grid ">
            <h6 className="text-lg text-petiteorchid">Havels</h6>
            <h5 className="text-base text-darkgray">
              Kids headphones bulk 10 pack multi colored for students
            </h5>
            <div className="">
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
                  />
                </label>
              ))}
            </div>
            <p>Rating Count: {selectedStarCount}</p>
            <p>Hover Rating Count: {selectedHoverStarCount}</p>
            <p className="text-lg text-darkgray">$100.00</p>
          </div>
        </div>
      </div>
    </div>
  )
}
