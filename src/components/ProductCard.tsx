/* eslint-disable prettier/prettier */
'use client'

import Image from 'next/image'
import { useState } from 'react'
import { FaStar } from 'react-icons/fa'

export default function ProductCard() {
  const [selectedStarCount, setSelectedStarCount] = useState(0)

  return (
    <div className="col-span-3">
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
          <div className="">
            <h6 className="text-lg text-petiteorchid">Havels</h6>
            <h5 className="text-base text-darkgray">
              Kids headphones bulk 10 pack multi colored for students
            </h5>
            <div className="grid grid-rows-1 grid-cols-5">
              {[...Array(5)].map((_, index) => (
                <label className="" htmlFor="" key={index}>
                  <FaStar
                    className={`${index <= selectedStarCount - 1 ? 'text-wildwillow' : ''
                      }`}
                    onClick={() => {
                      setSelectedStarCount(index + 1)
                    }}
                  />
                </label>
              ))}
            </div>
            <p>Your rating is {selectedStarCount}</p>
            <p className="text-lg text-darkgray">$100.00</p>
          </div>
        </div>
      </div>
    </div>
  )
}
