import Image from 'next/image'

export default function ProductImage() {
  return (
    <div className="flex justify-center">
      <Image
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: 'auto', height: 'auto' }}
        src="/images/watch.jpg"
        alt="product image"
        className="block cursor-pointer group-hover:hidden"
      ></Image>
      <Image
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: 'auto', height: 'auto' }}
        src="/images/smartwatch_square.jpg"
        alt="product image"
        className="hidden cursor-pointer group-hover:block"
      ></Image>
    </div>
  )
}
