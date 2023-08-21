export default function LogoCloud() {
  return (
    <div className="">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <p className="text-center text-base font-semibold uppercase text-gray-600 tracking-wider">
          Built by folks from
        </p>
        <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
          {logos.map(logo => {
            return (
              <div key={logo.name} className="col-span-1 flex justify-center py-8 px-8">
                <img className={`${logo.size} hover:brightness-[1.2] duration-500`} src={logo.src} alt={logo.name} />
              </div>
            );
          })}
        </div>

          <div className="flex justify-center">
        <button className="mt-10 bg-gradient-to-br from-primary to-purple-600 rounded-xl shadow-xl hover:translate-x-3 duration-500">
          <span className="">
            <div className="flex justify-center items-center gap-x-3 px-4 py-2 text-white text-sm">
            <p>Featured on</p>
            <img className="h-5 w-5" src="/y-combinator-logo.svg"></img>
            <p>Combinator</p>
            <p className="duration-300">→</p>
            </div>
          </span>
        </button>
        </div>

      </div>
    </div>
  );
}

const logos = [
  {
    name: "Salesforce",
    src: "/salesforce-logo.jpg",
    size: "h-20 scale-[1.7]"
  },
  {
    name: "Stanford University",
    src: "/stanford-logo.svg",
    size: "h-20 scale-[1.7]"
  },
  {
    name: "Massachusetts Institute of Technology",
    src: "/mit-logo.svg",
    size: "h-20 scale-[0.95]"
  },
  {
    name: "Cornell University",
    src: "/cornell-logo.svg",
    size: "h-20 scale-125"
  },
  {
    name: "Georgia Institute of Technology",
    src: "/georgia-tech-logo.svg",
    size: "h-20"
  },
  {
    name: "Carnegie Mellon University",
    src: "/cmu-logo.svg",
    size: "h-20 scale-[1.2]"
  },
];
