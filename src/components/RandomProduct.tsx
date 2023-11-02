import RatingStar from '@/lib/common-components/RatingStar'
import Image from 'next/image'

export default function RandomProduct() {
  return (
    <div className="mb-1 rounded-lg bg-white px-3 py-4">
      <h3 className="mb-5 text-base font-semibold text-gray">Random Product</h3>
      <div>
        <div className="flex w-72 border-b-[1px]">
          <div className="w-36 border-darkgray">
            <Image
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: 'auto', height: 'auto' }}
              src="/images/watch.jpg"
              alt="watch"
              className="rounded-full p-1"
            ></Image>
          </div>
          <div className="w-36 text-base">
            <h5 className="mb-2">
              Kids headphones bulk 10 pack multi colored for students
            </h5>
            <div className="flex flex-row">
              <RatingStar sizeProp={14} />
            </div>
            <b>$ 300</b>
          </div>
        </div>
        <div className="flex w-72 border-b-[1px]">
          <div className="w-36 border-darkgray">
            <Image
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: 'auto', height: 'auto' }}
              src="/images/watch.jpg"
              alt="watch"
              className="rounded-full p-1"
            ></Image>
          </div>
          <div className="w-36 text-base">
            <h5 className="mb-2">
              Kids headphones bulk 10 pack multi colored for students
            </h5>
            <div className="flex flex-row">
              <RatingStar sizeProp={14} />
            </div>
            <b>$ 300</b>
          </div>
        </div>
      </div>
    </div>
  )
}
