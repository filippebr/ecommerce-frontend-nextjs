import Link from 'next/link'

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center text-3xl">
      <Link href="/">Main</Link>
      Hello from About
    </div>
  )
}
