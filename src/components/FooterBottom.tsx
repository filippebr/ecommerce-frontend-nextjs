export default function FooterBottom() {
  return (
    <>
      <footer className="bg-jacarta py-4">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex justify-center">
            <div className="">
              <p className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()}; Powered by Nefelibata Web
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
