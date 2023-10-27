import BreadCrumb from '@/components/BreadCrumb'

export default function OurStore() {
  return (
    <>
      <BreadCrumb title="Our Store" />
      <div className="store-wrapper home-wrapper py-5">
        <div className="grid grid-cols-12 px-4 text-3xl sm:px-8 lg:px-16">
          <div className="col-span-3">
            <div className="rounded-lg bg-white px-3 py-4"></div>
            <div className="rounded-lg bg-white px-3 py-4"></div>
            <div className="rounded-lg bg-white px-3 py-4"></div>
            <div className="rounded-lg bg-white px-3 py-4"></div>
          </div>
          <div className="col-span-9"></div>
        </div>
      </div>
    </>
  )
}
