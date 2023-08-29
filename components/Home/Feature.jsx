export default function Feature({ title, description, image, alternate }) {
    const isAlternate = alternate % 2 !== 0;
    

    return (
      <div id="features" className="overflow-hidden py-12 max-w-7xl m-auto px-5 md:px-0">
        <div className="">
          <div className="invisible hidden md:visible md:grid grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:grid-cols-2 lg:items-center">
            {isAlternate ? (
              <>
                <div className="sm:px-6 lg:px-0">
                  <div className={`shadow-lg relative isolate overflow-hidden ${isAlternate ? 'bg-primary' : 'bg-primary'} px-6 pt-8 sm:mx-auto sm:max-w-2xl rounded-xl sm:pt-16 sm:pl-16 sm:pr-0 lg:mx-0 lg:max-w-none`}>
                    {isAlternate && (
                      <div
                        className="absolute -inset-y-px -left-3 -z-10 w-full origin-bottom-left skew-x-[-30deg] bg-indigo-100 opacity-20 ring-1 ring-inset ring-white"
                        aria-hidden="true"
                      />
                    )}
                    <div className="mx-auto max-w-2xl sm:mx-0 sm:max-w-none ">
                      <img
                        src={image}
                        alt="Product screenshot"
                        className="w-[40rem] mb-10 max-w-none rounded-tl-xl"
                      />
                    </div>
                    <div
                      className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 rounded-xl"
                      aria-hidden="true"
                    />
                  </div>
                </div>
                <div className={`px-6 lg:px-0 ${isAlternate ? 'lg:pr-4' : 'lg:pl-4'}`}>
                  <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
                    <p className="mt-2 text-3xl font-bold tracking-tight text-black sm:text-4xl">{title}</p>
                    <p className="mt-6 text-lg leading-8 text-accent">{description}</p>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className={`px-6 lg:px-0 ${isAlternate ? 'lg:pl-4' : 'lg:pr-4'}`}>
                  <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
                    <p className="mt-2 text-3xl font-bold tracking-tight text-black sm:text-4xl">{title}</p>
                    <p className="mt-6 text-lg leading-8 text-accent">{description}</p>
                  </div>
                </div>
                <div className={`sm:px-6 lg:px-0`}>
                  <div className={`shadow-lg relative isolate overflow-hidden ${isAlternate ? 'bg-primary' : 'bg-primary'} px-6 pt-8 sm:mx-auto sm:max-w-2xl rounded-xl sm:pt-16 sm:pl-16 sm:pr-0 lg:mx-0 lg:max-w-none`}>
                    {isAlternate && (
                      <div
                        className="absolute -inset-y-px -left-3 -z-10 w-full origin-bottom-left skew-x-[-30deg] opacity-20 ring-1 ring-inset ring-white"
                        aria-hidden="true"
                      />
                    )}
                    <div className="mx-auto max-w-2xl sm:mx-0 sm:max-w-none">
                      <img
                        src={image}
                        alt="Product screenshot"
                          className="w-[40rem] mb-10 max-w-none rounded-tl-xl "
                      />
                    </div>
                    <div
                      className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 rounded-xl"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </>
            )}
          </div>




          <div className="visible md:invisible md:hidden grid grid-cols-1 gap-y-8 sm:gap-y-20 lg:grid-cols-2 lg:items-center">

              <>
                
                <div className={`px-2 lg:px-0 ${isAlternate ? 'lg:pr-4' : 'lg:pl-4'}`}>
                  <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
                    <p className="mt-2 text-3xl font-bold tracking-tight text-black sm:text-4xl">{title}</p>
                    <p className="mt-6 text-lg leading-8 text-accent">{description}</p>
                  </div>
                </div>

                <div className="sm:px-6 lg:px-0">
                  <div className={`shadow-lg relative isolate overflow-hidden ${isAlternate ? 'bg-indigo-500' : 'bg-gray-800'} px-6 pt-8 sm:mx-auto sm:max-w-2xl rounded-xl sm:pt-16 sm:pl-16 sm:pr-0 lg:mx-0 lg:max-w-none`}>
                    {isAlternate && (
                      <div
                        className="absolute -inset-y-px -left-3 -z-10 w-full origin-bottom-left skew-x-[-30deg] bg-indigo-100 opacity-20 ring-1 ring-inset ring-white"
                        aria-hidden="true"
                      />
                    )}
                    <div className="mx-auto max-w-2xl sm:mx-0 sm:max-w-none ">
                      <img
                        src={image}
                        alt="Product screenshot"
                      className="w-[40rem] mb-10 max-w-none rounded-tl-xl bg-gray-800 "
                      />
                    </div>
                    <div
                      className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 rounded-xl"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </>
            
          </div>


        </div>
      </div>
    );
  }
  