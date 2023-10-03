import Image from 'next/image'
import Link from 'next/link'

export default function BlogCard() {
  return (
    <div className="col-span-1">
      <div className="flex flex-col items-center rounded-lg ">
        <Image
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: 'auto', height: 'auto' }}
          src="/images/blog-1.jpg"
          alt="blog"
          className="rounded-tl-lg rounded-tr-lg"
        ></Image>
        <div className="p-4">
          <p className="text-sm text-lightgray">01 Sep, 2023</p>
          <h5 className="title text-xl font-bold">
            A beautiful sunday morning renaissance
          </h5>
          <p className="mb-2 text-sm leading-6 text-lightgray">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi,
            id ab. Perspiciatis culpa iste quia commodi quibusdam, provident
            animi excepturi! Atque cumque et nulla porro illum quo, similique
            itaque fuga?
          </p>
          <Link
            href="/"
            className="rounded-3xl bg-jacarta px-4 py-2 text-lg text-white"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  )
}
