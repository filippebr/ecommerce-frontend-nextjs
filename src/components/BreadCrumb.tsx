import Link from 'next/link'

export default function BreadCrumb() {
  return (
    <div className="breadcrumb py-4">
      <div className="grid grid-cols-12 gap-4 px-4 text-3xl sm:px-8 lg:px-16">
        <div className="col-span-12">
          <p>
            <Link href="/">Home</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
