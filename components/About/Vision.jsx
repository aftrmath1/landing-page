import { CameraIcon } from '@heroicons/react/20/solid'

export default function Vision() {
    return (
        <div className="overflow-hidden bg-primary">
            <div className="relative mx-auto max-w-7xl py-16 px-6 lg:px-8">
                <div className="absolute top-0 bottom-0 left-3/4 hidden w-screen bg-gray-primary lg:block" />
                <div className="mx-auto max-w-prose text-base lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-8">
                    <div>
                        <h2 className="text-lg font-semibold text-gray-200">Our Vision</h2>
                        <h3 className="mt-2 text-3xl font-bold leading-8 tracking-tight text-white sm:text-4xl">You can be lean, and still execute at scale. It's possible.</h3>
                    </div>
                </div>
                <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
                    {/* <div className="relative lg:col-start-2 lg:row-start-1">
                        <svg
                            className="absolute top-0 right-0 -mt-20 -mr-20 hidden lg:block"
                            width={404}
                            height={384}
                            fill="none"
                            viewBox="0 0 404 384"
                            aria-hidden="true"
                        >
                            <defs>
                                <pattern
                                    id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                                    x={0}
                                    y={0}
                                    width={20}
                                    height={20}
                                    patternUnits="userSpaceOnUse"
                                >
                                    <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                                </pattern>
                            </defs>
                            <rect width={404} height={384} fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)" />
                        </svg>
                        <div className="relative mx-auto max-w-prose text-base lg:max-w-none">
                            <figure>
                                <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                                    <img
                                        className="rounded-lg object-cover object-center shadow-lg"
                                        src="https://images.unsplash.com/photo-1546913199-55e06682967e?ixlib=rb-1.2.1&auto=format&fit=crop&crop=focalpoint&fp-x=.735&fp-y=.55&w=1184&h=1376&q=80"
                                        alt="Whitney leaning against a railing on a downtown street"
                                        width={1184}
                                        height={1376}
                                    />
                                </div>
                                <figcaption className="mt-3 flex text-sm text-gray-500">
                                    <CameraIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                                    <span className="ml-2">Photograph by Marcus O’Leary</span>
                                </figcaption>
                            </figure>
                        </div>
                    </div> */}
                    <div className="mt-8 lg:mt-0">
                        <div className="mx-auto space-y-5 max-w-prose text-lg text-white lg:max-w-none">
                            <p>
                                In the age of startups and innovative small businesses, we understand that what matters isn't the size of your team, but the power of your execution. And we are committed to making that possible with Pipeline.
                            </p>
                            <p>
                            We're reshaping the future of sales, one small business at a time. That's our promise. That's our mission. Join us in rewriting the rules of the game.
                            </p>
                        </div>
                        <div className="prose prose-indigo mx-auto mt-5 text-white lg:col-start-1 lg:row-start-1 lg:max-w-none">
                            <h1 className="text-white text-6xl">Welcome to Pipeline, where less is truly more.</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
