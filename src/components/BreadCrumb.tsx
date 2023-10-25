import Link from 'next/link'

type Props = {
  title: string
}

export default function BreadCrumb({ title }: Props) {
  return (
    <div className="breadcrumb py-4">
      <div className="grid grid-cols-12 gap-4 px-4 text-3xl sm:px-8 lg:px-16">
        <div className="col-span-12">
          <p>
            <Link href="/" className="text-darkgray">
              Home
            </Link>{' '}
            / {title}
          </p>
        </div>
      </div>
    </div>
  )
}
