export default function SectionHeading({ title, subtitle = "" }) {
  return (
    <div className="">
      <main>
        <div>
          <div className="relative">
            <div className="absolute inset-x-0 bottom-0 h-1/2" />
            <div className="">
              <div className="relative py-10 shadow-xl sm:overflow-hidden">
                <div className="absolute inset-0">
                  <div className="absolute inset-0 mix-blend-multiply bg-primary bg-gradient-to-br from-primary to-purple-400" />
                </div>
                <svg
                  className="absolute inset-0 h-full w-full stroke-primary [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                  aria-hidden="true"
                >
                  <defs>
                    <pattern
                      id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                      width={200}
                      height={200}
                      x="50%"
                      y={-1}
                      patternUnits="userSpaceOnUse"
                    >
                      <path d="M100 200V.5M.5 .5H200" fill="none" />
                    </pattern>
                  </defs>
                  <rect
                    width="100%"
                    height="100%"
                    strokeWidth={0}
                    fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
                  />
                </svg>
                {/* <div className="relative px-4 sm:px-6 py-10 pb-20 sm:py-20 sm:pb-28 lg:py-28 lg:pb-40 lg:px-8"> */}
                <div className="relative px-4 sm:px-6 py-12 sm:py-16 lg:py-20 lg:px-8">
                  <h1 className="text-center font-extrabold text-4xl sm:text-5xl lg:text-6xl">
                    <span className="z-20 text-white">{title}</span>
                  </h1>
                  {subtitle !== "" && (
                    <p className="mt-6 max-w-lg mx-auto text-center text-sm md:text-md lg:text-xl text-white sm:max-w-3xl">
                      {subtitle}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
