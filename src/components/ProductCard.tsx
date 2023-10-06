import Image from 'next/image'
import { useState } from 'react'
import { FaStar } from 'react-icons/fa'

export default function ProductCard() {
  const [rating, setRating] = useState<number>(0)

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
                const currentRating = index + 1
                return (
                  <label key={index}>
                    <input
                      type="radio"
                      name="rating"
                      value={currentRating}
                      onClick={() => setRating(currentRating)}
                      className="hidden"
                    />
                    <FaStar className="cursor-pointer" size={25} />
                  </label>
                )
              }),
            ]}
            <p className="text-lg text-darkgray">$100.00</p>
          </div>
        </div>
      </div>
    </div>
  )
}
