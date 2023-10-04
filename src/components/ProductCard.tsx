import Image from 'next/image'

export default function ProductCard() {
  return (
    <div className="col-span-3">
      <div className="rounded-lg bg-white p-4">
        <div>
          <Image
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: 'auto', height: 'auto' }}
            src="/images/blog-1.jpg"
            alt="blog"
          ></Image>
        </div>
      </div>
    </div>
  )
}
