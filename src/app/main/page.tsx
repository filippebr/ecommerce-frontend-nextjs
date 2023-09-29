import Image from "next/image"

export default function BlogCard() {
  return (
    <div className="text-3xl flex flex-col justify-center items-center">
      <div className="bg-white rounded-lg">
        <Image
          src="/images/blog-1.jpg"
          width={33}
          height={33}
          alt="blog"
          className="rounded-tl-lg rounded-tr-lg"
        >

        </Image>
      </div>
    </div>
  )
}