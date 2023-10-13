/* eslint-disable prettier/prettier */
'use client'
import Image from 'next/image'
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
            <div className="flex flex-row items-center justify-center text-base font-semibold space-x-2">
              <p className="mb-0">
                <b>5 </b>days
              </p>
              <div className="flex gap-3 items-center">
                <span className="py-1 px-3 rounded-full bg-contessa">1</span>:
                <span className="py-1 px-3 rounded-full bg-contessa">1</span>:
                <span className="py-1 px-3 rounded-full bg-contessa">1</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
