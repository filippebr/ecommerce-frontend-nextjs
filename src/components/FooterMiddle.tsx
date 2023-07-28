import Link from 'next/link'

export default function FooterMiddle() {
  return (
    <>
      <footer className="bg-jacarta py-4">
        <div className="w-full mx-auto py-3 px-6 sm:px-12 lg:px-24">
          <div className="grid grid-cols-12 items-center">
            <div className="col-span-4 text-white">
              <h4 className="text-white mb-4">Contact Us</h4>
              <div></div>
            </div>
            <div className="col-span-3 text-white">
              <h4 className="text-white mb-4">Information</h4>
              <div></div>
            </div>
            <div className="col-span-3 text-white">
              <h4 className="text-white mb-4">Account</h4>
              <div></div>
            </div>
            <div className="col-span-2 text-white">
              <h4 className="text-white mb-4">Quick Links</h4>
              <div className="">
                <Link href="#">Laptops</Link>
                <Link href="#">Headphones</Link>
                <Link href="#">Tablets</Link>
                <Link href="#">Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
