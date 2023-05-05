import Image from 'next/image';

export default function FooterTop() {
  return (
    <>
      <footer className="bg-jacarta py-3 border-b border-waterloo">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-12">
            <div className="col-span-5">
              <div className="flex gap-5 items-center">
                <Image
                  src="/images/newsletter.png"
                  width={33}
                  height={33}
                  alt="newsletter"
                ></Image>
                <h2 className="text-xl mb-0 text-white">
                  Sign Up for Newsletter
                </h2>
              </div>
            </div>
            <div className="col-span-7">
              <div className="text-center mb-0 text-white"></div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
