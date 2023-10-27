import Link from 'next/link'

type Props = {
  title: string
}

export default function BreadCrumb({ title }: Props) {
  return (
    <div className="mb-0 py-4">
      <div className="grid grid-cols-12 gap-4 px-4 text-3xl sm:px-8 lg:px-16">
        <div className="col-span-12">
          <p className="flex items-center justify-center">
            <Link href="/" className="text-darkgray">
              Home
            </Link>
            &nbsp; / {title}
          </p>
        </div>
      </div>
    </div>
  )
}
