/* eslint-disable prettier/prettier */
'use client'
import { useState } from 'react'
import { FaStar } from 'react-icons/fa'

export default function ProductDetails() {
  const [selectedStarCount, setSelectedStarCount] = useState(0)
  const [selectedHoverStarCount, setSelectedHoverStarCount] = useState(0)

  return (
    <div className="space-y-4">
      <h6 className="text-lg text-petiteorchid font-semibold">Havels</h6>
      <h5 className="text-base text-darkgray font-semibold">
        Kids headphones bulk 10 pack multi colored for students
      </h5>
      <div className="grid grid-cols-5">
        <div className="flex justify-start">
          {[...Array(5)].map((_, index) => (
            <label htmlFor="" key={index}>
              <FaStar
                className={`${index <= selectedStarCount - 1 ? 'text-sushi' : ''
                  } cursor-pointer ${index + 1 <= selectedHoverStarCount ? 'text-sushi' : ''
                  } `}
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
      <p className="text-lg text-darkgray">$100.00</p>
    </div>
  )
}
