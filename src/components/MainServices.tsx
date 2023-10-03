import mainServicesData from '@/data/mainServicesData'
import Image from 'next/image'

export default function MainServices() {
  return (
    <section className="py-5">
      <div className="grid grid-cols-5 items-center px-4 sm:px-8 lg:px-16">
        {mainServicesData.map((data) => (
          <div key={data.id} className="col-span-1 flex items-center gap-2">
            <Image
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: 'auto', height: 'auto' }}
              className="rounded-lg"
              src={data.src}
              alt="service"
            ></Image>
            <div>
              <h6 className="font-bold">{data.title}</h6>
              <p>{data.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
