import Image from 'next/image'
import Link from 'next/link'

export default function ActionBar() {
  return (
    <div className="transition-right absolute right-[-30px] top-10 duration-300 ease-in-out group-hover:right-5">
      <div className="flex flex-col space-y-4">
        <Link href={'/'}>
          <Image
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: 'auto', height: 'auto' }}
            src="/images/prodcompare.svg"
            alt="prodcompare"
            className="rounded-full p-1 hover:bg-wildwillow"
          ></Image>
        </Link>
        <Link href={'/'}>
          <Image
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: 'auto', height: 'auto' }}
            src="/images/view.svg"
            alt="view"
            className="rounded-full p-1 hover:bg-wildwillow"
          ></Image>
        </Link>
        <Link href={'/'}>
          <Image
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: 'auto', height: 'auto' }}
            src="/images/add-cart.svg"
            alt="addcart"
            className="rounded-full p-1 hover:bg-wildwillow"
          ></Image>
        </Link>
      </div>
    </div>
  )
}
