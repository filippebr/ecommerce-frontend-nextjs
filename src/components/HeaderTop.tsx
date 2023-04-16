export default function HeaderTop() {
  return (
    <header className="bg-jacarta">
      <div className="w-full mx-auto py-3 px-6 sm:px-12 lg:px-24">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-hintofyellow">
              Free Shipping Over $100 & Free Returns
            </p>
          </div>
          <div className="text-right">
            <p className="text-sm text-hintofyellow">
              Hotline:
              <a className="text-spunpearl" href="tel: +91 8264954234">
                +91 8264954234
              </a>
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
