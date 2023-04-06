import Link from 'next/link';

export default function About() {
  return (
    <div className="text-3xl flex flex-col justify-center items-center">
      <Link href="/">Main</Link>
      Hello from About
    </div>
  );
}
