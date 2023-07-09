export default function JoinForm() {
  return (
    <div className="m-16 border-t border-gray-100 pt-8 sm:mt-20 lg:mt-24 lg:flex lg:items-center lg:justify-between">
      <div>
        <h3 className="text-3xl font-semibold leading-6 text-white">
          Join the BETA waitlist
        </h3>
        {/* <p className="mt-2 text-sm leading-6 text-gray-600">
          The latest news, articles, and resources, sent to your inbox weekly.
        </p> */}
      </div>
      <form className="mt-6 sm:flex lg:mt-0">
        <label htmlFor="email-address" className="sr-only">
          Email address
        </label>
        <input
          type="email"
          name="email-address"
          id="email-address"
          autoComplete="email"
          required
          className="w-full appearance-none rounded-md border-gray-300 bg-white px-[calc(theme(spacing.3)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base leading-7 text-gray-900 placeholder-gray-400 shadow-sm focus:border-indigo-600 focus:ring-indigo-600 sm:w-56 sm:text-sm sm:leading-6"
          placeholder="Enter your email"
        />
        <div className="mt-4 rounded-md sm:mt-0 sm:ml-4 sm:flex-shrink-0">
          <button
            type="submit"
            className="flex w-full items-center justify-center rounded-md bg-indigo-600 py-1.5 px-3 text-base font-semibold leading-7 text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:text-sm sm:leading-6"
          >
            Join now
          </button>
        </div>
      </form>
    </div>
  );
}
