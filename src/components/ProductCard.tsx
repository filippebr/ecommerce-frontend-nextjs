/* eslint-disable prettier/prettier */
'use client'

import Image from 'next/image'
import { useState } from 'react'
import { FaStar } from 'react-icons/fa'

export default function ProductCard() {
  const [rating, setRating] = useState<number | null>(null) // Use number as the type for rating
  const [hover, setHover] = useState<number | null>(null) // Use number as the type for hover

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
            {[
              ...Array(5).map((star, index) => {
                const currentRating = index + 1 || null
                return (
                  <label key={index}>
                    <input
                      type="radio"
                      name="rating"
                      value={
                        currentRating !== null ? currentRating.toString() : ''
                      }
                      onClick={() => setRating(currentRating)}
                      className="hidden"
                    />
                    <FaStar
                      className="cursor-pointer"
                      size={50}
                      color={
                        currentRating !== null &&
                          hover !== null &&
                          rating !== null &&
                          currentRating <= (hover || rating)
                          ? '#ffc107'
                          : '#e4e5e9'
                      }
                      onMouseEnter={() => setHover(currentRating)}
                      onMouseLeave={() => setHover(null)}
                    />
                  </label>
                )
              }),
            ]}
            <p>Your rating is {rating}</p>
            <p className="text-lg text-darkgray">$100.00</p>
          </div>
        </div>
      </div>
    </div>
  )
}
