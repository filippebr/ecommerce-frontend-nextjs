/* eslint-disable prettier/prettier */
'use client'
import { useState } from 'react'
import { FaStar } from 'react-icons/fa'

interface RatingStarProps {
  sizeProp: number
}

export default function RatingStar({ sizeProp }: RatingStarProps) {
  const [selectedStarCount, setSelectedStarCount] = useState(0)
  const [selectedHoverStarCount, setSelectedHoverStarCount] = useState(0)

  return (
    <>
      {[...Array(5)].map((_, index) => (
        <label key={index}>
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
            size={sizeProp}
          />
        </label>
      ))}
    </>
  )
}
