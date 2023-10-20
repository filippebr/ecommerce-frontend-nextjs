import RatingStar from '@/lib/common-components/RatingStar'
import Image from 'next/image'
import Link from 'next/link'

export default function SpecialProduct() {
  // const [selectedStarCount, setSelectedStarCount] = useState(0)
  // const [selectedHoverStarCount, setSelectedHoverStarCount] = useState(0)

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
            <h5 className="text-lg font-semibold text-petiteorchid">Havels</h5>
            <h6 className="text-base font-semibold text-darkgray">
              Samsung Galaxy Note10+ Mobile Phone; Sim...
            </h6>
            <div className="grid grid-cols-5">
              <div className="flex justify-start">
                <RatingStar />
                {/* {[...Array(5)].map((_, index) => (
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
                ))} */}
              </div>
            </div>
            <p className="text-lg text-darkgray">
              <span className="text-stiletto">$100.00</span> <s>$200.00</s>
            </p>
            <div className="flex flex-row items-center space-x-2 text-base font-semibold">
              <p className="mb-0">
                <b>5 </b>days
              </p>
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-contessa px-3 py-1">1</span>:
                <span className="rounded-full bg-contessa px-3 py-1">1</span>:
                <span className="rounded-full bg-contessa px-3 py-1">1</span>
              </div>
            </div>
            <div className="flex flex-col space-y-4 text-base">
              <p>Products: 5</p>
              <div className="h-4 w-1/4 rounded-full bg-lightgray dark:bg-darkgray">
                <div
                  className="h-4 rounded-full bg-waterloo"
                  style={{ width: '50%' }}
                ></div>
              </div>
            </div>
            <div className="mt-6">
              <Link
                href="/"
                className="rounded-3xl bg-jacarta px-4 py-2 text-base text-white hover:bg-eastbay"
              >
                Add to Cart
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
