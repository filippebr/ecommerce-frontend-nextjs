import Link from 'next/link'
import { BsGithub, BsInstagram, BsLinkedin, BsYoutube } from 'react-icons/bs'

export default function FooterMiddle() {
  return (
    <>
      <footer className="bg-jacarta py-4">
        <div className="mx-auto w-full px-6 py-3 sm:px-12 lg:px-24">
          <div className="grid grid-cols-12 ">
            <div className="col-span-4 text-white">
              <h4 className="mb-4 text-xl text-white">Contact Us</h4>
              <div className="mt-4 flex flex-col justify-center">
                <address className="text-xs text-white">
                  John Doe, 777 Near Ville Town, <br /> São Paulo, São Paulo
                  <br />
                  Pincode: 99999
                </address>
                <a
                  href="tel:+91 999999999"
                  className="mt-2 block text-sm text-white"
                >
                  +91 999999999
                </a>
                <a
                  href="mailto:filippeffx@hotmail.com"
                  className="mt-2 block text-sm text-white"
                >
                  filippeffx@hotmail.com
                </a>
                <div className="mt-4 flex flex-row gap-4 text-xl text-spunpearl">
                  <a href="">
                    <BsLinkedin />
                  </a>
                  <a href="">
                    <BsGithub />
                  </a>
                  <a href="">
                    <BsYoutube />
                  </a>
                  <a href="">
                    <BsInstagram />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-span-3 text-white">
              <h4 className="mb-4 text-xl text-white">Information</h4>
              <div className="flex flex-col justify-center">
                <Link className="mb-0 py-1 text-sm text-white" href="#">
                  Privacy Policy
                </Link>
                <Link className="mb-0 py-1 text-sm text-white" href="#">
                  Refund Policy
                </Link>
                <Link className="mb-0 py-1 text-sm text-white" href="#">
                  Shipping Policy
                </Link>
                <Link className="mb-0 py-1 text-sm text-white" href="#">
                  Terms & Conditions
                </Link>
                <Link className="mb-0 py-1 text-sm text-white" href="#">
                  Blogs
                </Link>
              </div>
            </div>
            <div className="col-span-3 text-white">
              <h4 className="mb-4 text-xl text-white">Account</h4>
              <div className="flex flex-col justify-center">
                <Link className="mb-0 py-1 text-sm text-white" href="#">
                  About us
                </Link>
                <Link className="mb-0 py-1 text-sm text-white" href="#">
                  Faq
                </Link>
                <Link className="mb-0 py-1 text-sm text-white" href="#">
                  Contact
                </Link>
              </div>
            </div>
            <div className="col-span-2 text-white">
              <h4 className="mb-4 flex text-xl text-white">Quick Links</h4>
              <div className="flex flex-col justify-center">
                <Link className="mb-0 py-1 text-sm text-white" href="#">
                  Laptops
                </Link>
                <Link className="mb-0 py-1 text-sm text-white" href="#">
                  Headphones
                </Link>
                <Link className="mb-0 py-1 text-sm text-white" href="#">
                  Tablets
                </Link>
                <Link className="mb-0 py-1 text-sm text-white" href="#">
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
