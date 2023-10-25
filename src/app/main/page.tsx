import Link from 'next/link'

export default function Main() {
  return (
    <>
      <h1 className={`flex items-center justify-center text-3xl`}>
        Hello from Main!
      </h1>
      <Link className="flex items-center justify-center text-3xl" href="/about">
        About
      </Link>
      <Link className="flex items-center justify-center text-3xl" href="/store">
        Our Store
      </Link>
      <Link
        className="flex items-center justify-center text-3xl"
        href="/contact"
      >
        Contact
      </Link>
    </>
  )
}
