import Image from "next/image"
import Link from "next/link"

export default function BlogCard() {
  return (
    <div className="col-span-1">
      <div className="bg-white rounded-lg col-span-1">
        <Image
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: 'auto', height: 'auto' }}
          src="/images/blog-1.jpg"
          alt="blog"
          className="rounded-tl-lg rounded-tr-lg"
        >
        </Image>
        <div className="p-4">
          <p className="text-sm text-lightgray">01 Sep, 2023</p>
          <h5 className="title text-xl font-bold">
            A beautiful sunday morning renaissance
          </h5>
          <p className="text-sm leading-6 text-lightgray ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi, id ab. Perspiciatis culpa
            iste quia commodi quibusdam, provident animi excepturi! Atque cumque et nulla porro illum quo,
            similique itaque fuga?
          </p>
          <Link
            href="/"
            className="bg-jacarta rounded-3xl text-lg text-white py-2 px-4"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>

  )
}