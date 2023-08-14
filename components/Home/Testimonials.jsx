export default function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl">
      <div className="">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-10">
          Hear from our customers.
        </h2>
      </div>
      <div className="flex flex-wrap lg:flex-nowrap justify-center gap-x-12 gap-y-12 ">
        {testimonials.map(testimonial => {
          return (
            <blockquote className="md:flex rounded-lg md:flex-grow md:flex-col px-16 py-20 bg-background shadow-lg hover:scale-[1.02] hover:cursor-pointer duration-500 ">
              <div className="relative text-md font-medium text-gray-600 md:flex-grow">
                <p className="relative">{testimonial.quote}</p>
              </div>
              <footer className="mt-8">
                <div className="flex items-start">
                  <div className="inline-flex flex-shrink-0">
                    <img
                      className="h-12 w-12 rounded-full"
                      src={testimonial.pfp}
                      alt="Profile picture for $testimonial.name"
                    />
                  </div>
                  <div className="ml-4">
                    <div className="text-base font-medium text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-base font-medium text-primary text-sm">
                      {testimonial.info}
                    </div>
                  </div>
                </div>
              </footer>
            </blockquote>
          );
        })}
      </div>
    </section>
  );
}

const testimonials = [
  {
    quote:
      "Pipelines's automation and personalized messaging for our entire prospect list has skyrocketed my reply rates. I find myself in a position where I don't need to hire full time sales reps.",
    pfp: "/logo.png",
    name: "Chris Zita",
    info: "Agency Launch",
  },
  {
    quote:
      "It's super easy to use.  I used to pay thousands a month to do what Pipeline does at an affordable price.  It helped my company slim down without comprimising on quality of work.",
    pfp: "/logo.png",
    name: "Filip Skotarski",
    info: "Blythe Media",
  },
  {
    quote:
      "We used Pipeline to write custom email campaigns for our email list. We saw an increase in engagement & It allows us to do weeks worth of copywriting in a matter of hours.",
    pfp: "/logo.png",
    name: "Nadeem Ahmed",
    info: "Acuity Ads",
  },
];
