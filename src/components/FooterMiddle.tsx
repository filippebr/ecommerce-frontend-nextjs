import Link from 'next/link'

export default function FooterMiddle() {
  return (
    <>
      <footer className="bg-jacarta py-4">
        <div className="w-full mx-auto py-3 px-6 sm:px-12 lg:px-24">
          <div className="grid grid-cols-12 ">
            <div className="col-span-4 text-white">
              <h4 className="text-white mb-4 text-xl">Contact Us</h4>
              <div className="flex flex-col justify-center">
                <address className="text-white text-xs">
                  John Doe, 777 Near Ville Town, <br /> São Paulo, São Paulo
                  <br />
                  Pincode: 99999
                </address>
              </div>
            </div>
            <div className="col-span-3 text-white">
              <h4 className="text-white mb-4 text-xl">Information</h4>
              <div className="flex flex-col justify-center">
                <Link className="text-white text-sm py-1 mb-0" href="#">
                  Privacy Policy
                </Link>
                <Link className="text-white text-sm py-1 mb-0" href="#">
                  Refund Policy
                </Link>
                <Link className="text-white text-sm py-1 mb-0" href="#">
                  Shipping Policy
                </Link>
                <Link className="text-white text-sm py-1 mb-0" href="#">
                  Terms & Conditions
                </Link>
                <Link className="text-white text-sm py-1 mb-0" href="#">
                  Blogs
                </Link>
              </div>
            </div>
            <div className="col-span-3 text-white">
              <h4 className="text-white mb-4 text-xl">Account</h4>
              <div className="flex flex-col justify-center">
                <Link className="text-white text-sm py-1 mb-0" href="#">
                  About us
                </Link>
                <Link className="text-white text-sm py-1 mb-0" href="#">
                  Faq
                </Link>
                <Link className="text-white text-sm py-1 mb-0" href="#">
                  Contact
                </Link>
              </div>
            </div>
            <div className="col-span-2 text-white">
              <h4 className="text-white text-xl mb-4 flex">Quick Links</h4>
              <div className="flex flex-col justify-center">
                <Link className="text-white text-sm py-1 mb-0" href="#">
                  Laptops
                </Link>
                <Link className="text-white text-sm py-1 mb-0" href="#">
                  Headphones
                </Link>
                <Link className="text-white text-sm py-1 mb-0" href="#">
                  Tablets
                </Link>
                <Link className="text-white text-sm py-1 mb-0" href="#">
                  Watch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
