export default function AboutCard() {
  return (
    <div className="md:rounded-xl rounded-none relative isolate md:-translate-y-10 lg:-translate-y-12 bg-white z-10 sm:mx-10 md:mx-20 lg:mx-32 rounded-xl shadow-xl">
      <div className="px-6 py-3 sm:py-6 md:py-8 lg:py-12 lg:gap-x-10 lg:px-12 text-black">
        <div className="mb-4 md:mb-8 lg:mb-12">
          <h1 className="text-xl">
            We are at the forefront of customer acquisition for startups & small
            business.
          </h1>
          <p className="mb-2 md:mb-3">
            On numerous occasions, we've embarked on the journey of launching a
            company, only to be met with discouragement when confronted with the
            steep prices associated with engaging a sales agency or investing in
            multiple sales software tools.
          </p>

          <p className="mb-2 md:mb-3">
            And that is where Pipeline comes in - it is YOUR tool to acquire
            your first paying customers without any hassle.
          </p>

          <p className="mb-2 md:mb-3">
            We’ve boiled down enterprise selling best practices down to its
            fundamentals and built an affordable platform for business owners to
            scale their outreach needs.
          </p>
        </div>

        <div>
          <h1 className="text-xl">Our Vision</h1>
          <p className="mb-2 md:mb-3">
            You can be lean, and still execute at scale. It's possible.
          </p>
          <p className="mb-2 md:mb-3">
            In the age of startups and innovative small businesses, we
            understand that what matters isn't the size of your team, but the
            power of your execution. And we are committed to making that
            possible with Pipeline.
          </p>

          <p className="mb-2 md:mb-3">
            We're reshaping the future of sales, one small business at a time.
            That's our promise. That's our mission. Join us in rewriting the
            rules of the game.
          </p>
        </div>

        {/* <div className="bg-gradient-to-br from-primary to-purple-500 my-4 sm:my-6 md:my-12 lg:my-20 rounded-3xl shadow-2xl hover:brightness-150 duration-700 hover:cursor-pointer opacity-75"> */}
          <h1 className="bg-gradient-to-br from-primary to-purple-500 bg-clip-text text-transparent text-center text-2xl md:text-3xl lg:text-4xl p-4 sm:p-6 md:p-8 lg:p-12">
            Welcome to Pipeline, where less is truly more.
          </h1>
        {/* </div> */}
      </div>
    </div>
  );
}
