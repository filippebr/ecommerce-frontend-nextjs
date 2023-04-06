import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <h1 className="text-3xl flex justify-center items-center">
        Hello from Home!
      </h1>
      <Link className="text-3xl flex justify-center items-center" href="/about">
        About
      </Link>
      <Link
        className="text-3xl flex justify-center items-center"
        href="/contact"
      >
        Contact
      </Link>
    </>
  );
}
