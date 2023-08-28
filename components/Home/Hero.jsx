import { Link, animateScroll as scroll } from "react-scroll";

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-primary">
      <div>
        <svg
          className="absolute inset-0 -z-10 h-full w-full stroke-gray-900 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="tiltedGrid"
              width={115.47} // 100/cos(30) = 115.47
              height={100}  // Keeping it 100 as we don't want any vertical change
              patternTransform="skewX(-15)" // 30 degree skew to the left
              patternUnits="userSpaceOnUse"
            >
              <line x1="0" y1="0" x2="0" y2={100} stroke="white" strokeWidth="1" />
              <line x1="0" y1="0" x2={115.47} y2="0" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#tiltedGrid)"
          />
        </svg>


        {/* <svg
          viewBox="0 0 1108 632"
          aria-hidden="true"
          className="absolute top-10 left-[calc(50%-4rem)] -z-10 w-[69.25rem] max-w-none transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
        >
          <path
            fill="url(#175c433f-44f6-4d59-93f0-c5c51ad5566d)"
            fillOpacity=".2"
            d="M235.233 402.609 57.541 321.573.83 631.05l234.404-228.441 320.018 145.945c-65.036-115.261-134.286-322.756 109.01-230.655C968.382 433.026 1031 651.247 1092.23 459.36c48.98-153.51-34.51-321.107-82.37-385.717L810.952 324.222 648.261.088 235.233 402.609Z"
          />
          <defs>
            <linearGradient
              id="175c433f-44f6-4d59-93f0-c5c51ad5566d"
              x1="1220.59"
              x2="-85.053"
              y1="432.766"
              y2="638.714"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#5E17EB" />
              <stop offset={1} stopColor="#5E17EB" />
            </linearGradient>
          </defs>
        </svg> */}
      </div>

      <div className="mx-auto max-w-7xl pb-20 sm:pb-8 lg:flex lg:pb-32 px-6 lg:px-8 md:h-screen md:flex md:items-center pt-32">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0  lg:pt-8">
          {/* <div className="mt-24 sm:mt-32 lg:mt-16">
            <a
              href="#"
              className="space-x-6 flex justify-center md:justify-normal"
            >
              <span className="rounded-full bg-background px-3 py-1 text-xs md:text-sm font-semibold leading-6 text-primary ring-1 ring-inset ring-indigo-500/20">
                No credit card required
              </span>
              <span className="rounded-full bg-background px-3 py-1 text-xs md:text-sm font-semibold leading-6 text-primary ring-1 ring-inset ring-indigo-500/20">
                Free warmup included
              </span>
            </a>
          </div> */}

          <div className="">
            <h1 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl text-center md:text-left">
              Sales reps shouldn't have to worry about <span className="highlight">writer's block</span>.
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/200 text-center md:text-left">
              Pipeline researches your leads, writes cold emails that sell, and runs your campaigns across multiple channels.
            </p>
          </div>

          <div className="mt-10 flex justify-center md:justify-normal items-center gap-x-6">
            <Link
              href="/pricing"
              className="rounded-md bg-white hover:opacity-80 px-3.5 py-1.5 text-base font-semibold leading-7 text-primary shadow-sm duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
            >
              Get started
            </Link>

            <Link
              to="features"
              smooth={true}
              duration={600}
              className="hover:cursor-pointer text-base text-white leading-7 text-primary hover:translate-x-2 duration-200 ease-in-out"
            >
              Learn more <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
        <div className="hidden sm:block mx-auto pt-12 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mt-0 lg:mr-0 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <img
              src="/insights.png"
              alt="App screenshot"
              width={2032}
              height={1042}
              className="w-[55rem] rounded-md"
            />
          </div>
        </div>

        <div className="block sm:hidden my-24">
          <img
            src="/insights.png"
            alt="App screenshot"
            width={2432}
            height={1442}
            className="w-[76rem] rounded-md"
          />
        </div>
      </div>
    </div>
  );
}
