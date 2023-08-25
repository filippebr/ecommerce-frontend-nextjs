import mainCategoriesData from "@/data/mainCategoriesData"
import Image from "next/image"

export default function MainCategories() {
  return (
    <section className="py-5">
      <div className="grid grid-cols-5 grid-rows-2 items-center px-4 sm:px-8 lg:px-16">

        {mainCategoriesData.map((data) => (
          <div key={data.id} className="col-span-1 col-row-1 flex items-center px-2 justify-between">
            <div className="">
              <h6 className="font-bold">{data.title}</h6>
              <p>{data.quantity}</p>
            </div>
            <Image
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: 'auto', height: 'auto' }}
              className="rounded-lg"
              src={data.src}
              alt="service"
            ></Image>
          </div>
        ))}

      </div>

    </section>
  )
}