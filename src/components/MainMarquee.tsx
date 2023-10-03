import mainMarqueeData from '@/data/mainMarqueeData'
import Image from 'next/image'
import Marquee from 'react-fast-marquee'

export default function MainMarquee() {
  return (
    <section className="py-5">
      <div className="grid grid-cols-1 items-center px-4 sm:px-8 lg:px-16">
        <div className="bg-white p-4 shadow-marquee">
          <Marquee
            className="flex flex-col"
            gradient={true}
            gradientColor={[248, 250, 253]}
            gradientWidth={300}
            speed={30}
          >
            {mainMarqueeData.map((data) => (
              <div key={data.id} className="mx-8 w-32">
                <Image
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: 'auto', height: 'auto' }}
                  src={data.src}
                  alt="brand"
                ></Image>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  )
}
