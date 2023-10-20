/* eslint-disable prettier/prettier */
'use client'
import RatingStar from '@/lib/common-components/RatingStar'

export default function ProductDetails() {
  return (
    <div className="space-y-4">
      <h6 className="text-lg text-petiteorchid font-semibold">Havels</h6>
      <h5 className="text-base text-darkgray font-semibold">
        Kids headphones bulk 10 pack multi colored for students
      </h5>
      <div className="grid grid-cols-5">
        <div className="flex justify-start">
          <RatingStar />
        </div>
      </div>
      <p className="text-lg text-darkgray">$100.00</p>
    </div>
  )
}
