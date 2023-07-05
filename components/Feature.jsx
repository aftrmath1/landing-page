export default function Feature({ step, title, description, image, alternate }) {
    const isAlternate = alternate && step % 2 !== 0;
  
    return (
      <div className="overflow-hidden py-12">
        <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:grid-cols-2 lg:items-center">
            {isAlternate ? (
              <>
                <div className="sm:px-6 lg:px-0">
                  <div className={`relative isolate overflow-hidden ${isAlternate ? 'bg-indigo-500' : 'bg-gray-800'} px-6 pt-8 sm:mx-auto sm:max-w-2xl sm:rounded-3xl sm:pt-16 sm:pl-16 sm:pr-0 lg:mx-0 lg:max-w-none`}>
                    {isAlternate && (
                      <div
                        className="absolute -inset-y-px -left-3 -z-10 w-full origin-bottom-left skew-x-[-30deg] bg-indigo-100 opacity-20 ring-1 ring-inset ring-white"
                        aria-hidden="true"
                      />
                    )}
                    <div className="mx-auto max-w-2xl sm:mx-0 sm:max-w-none">
                      <img
                        src={image}
                        alt="Product screenshot"
                        className="-mb-12 w-[57rem] max-w-none rounded-tl-xl bg-gray-800 ring-1 ring-white/10"
                      />
                    </div>
                    <div
                      className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 sm:rounded-3xl"
                      aria-hidden="true"
                    />
                  </div>
                </div>
                <div className={`px-6 lg:px-0 ${isAlternate ? 'lg:pr-4' : 'lg:pl-4'}`}>
                  <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
                    <h2 className="text-lg font-semibold leading-8 tracking-tight text-gray-200">{step}</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</p>
                    <p className="mt-6 text-lg leading-8 text-gray-200">{description}</p>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className={`px-6 lg:px-0 ${isAlternate ? 'lg:pl-4' : 'lg:pr-4'}`}>
                  <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
                    <h2 className="text-lg font-semibold leading-8 tracking-tight text-gray-200">{step}</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</p>
                    <p className="mt-6 text-lg leading-8 text-gray-200">{description}</p>
                  </div>
                </div>
                <div className={`sm:px-6 lg:px-0`}>
                  <div className={`relative isolate overflow-hidden ${isAlternate ? 'bg-indigo-500' : 'bg-gray-800'} px-6 pt-8 sm:mx-auto sm:max-w-2xl sm:rounded-3xl sm:pt-16 sm:pl-16 sm:pr-0 lg:mx-0 lg:max-w-none`}>
                    {isAlternate && (
                      <div
                        className="absolute -inset-y-px -left-3 -z-10 w-full origin-bottom-left skew-x-[-30deg] bg-indigo-100 opacity-20 ring-1 ring-inset ring-white"
                        aria-hidden="true"
                      />
                    )}
                    <div className="mx-auto max-w-2xl sm:mx-0 sm:max-w-none">
                      <img
                        src={image}
                        alt="Product screenshot"
                        className="-mb-12 w-[57rem] max-w-none rounded-tl-xl bg-gray-800 ring-1 ring-white/10"
                      />
                    </div>
                    <div
                      className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 sm:rounded-3xl"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    );
  }
  