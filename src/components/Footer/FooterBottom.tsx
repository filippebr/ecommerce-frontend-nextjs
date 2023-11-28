export default function FooterBottom() {
  return (
    <>
      <footer className="bg-jacarta py-4">
        <div className="mx-auto max-w-screen-2xl">
          <div className="flex justify-center">
            <div className="">
              <p className="mb-0 text-center text-white">
                &copy; {new Date().getFullYear()} Powered by Developer&apos;s
                Web
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
