import Image from 'next/image'

export default function Main() {
  return (
    <>
      <section>
        <div className="py-5">
          <div className="grid grid-cols-12 items-center px-6 sm:px-12 lg:px-24">
            <div className="col-span-6">
              <div className="p-3">
                <Image
                  width="100"
                  height="100"
                  src="/images/main-banner.jpg"
                  alt="main banner"
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
