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
              className="rounded-full p-1 hover:bg-petiteorchid"
            ></Image>
          </div>
          <div className="special-product-content">
            <h6 className="text-lg text-petiteorchid">Havels</h6>
            <h5 className="text-base text-darkgray">
              Samsung Galaxy Note10+ Mobile Phone; Sim...
            </h5>
            {[...Array(5)].map((_, index) => (
              <label htmlFor="" key={index}>
                <FaStar
                  className={`${index <= selectedStarCount - 1 ? 'text-sushi' : ''
                    } 
                    cursor-pointer 
                    ${index + 1 <= selectedHoverStarCount ? 'text-sushi' : ''
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
            <p className="text-lg text-darkgray">
              <span className="text-stiletto">$100.00 </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
