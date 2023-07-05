import { InboxIcon, TrashIcon, UsersIcon } from '@heroicons/react/24/outline'
import { FiTrendingDown, FiTrendingUp } from 'react-icons/fi'

const features = [
  {
    name: 'Composition Time',
    description:
      'Non quo aperiam repellendus quas est est. Eos aut dolore aut ut sit nesciunt. Ex tempora quia. Sit nobis consequatur dolores incidunt.',
    href: '#',
    increase: false,
  },
  {
    name: 'Reply Rate',
    description:
      'Vero eum voluptatem aliquid nostrum voluptatem. Vitae esse natus. Earum nihil deserunt eos quasi cupiditate. A inventore et molestiae natus.',
    href: '#',
    increase: true,
  },
  {
    name: 'Sales Rate',
    description:
      'Et quod quaerat dolorem quaerat architecto aliquam accusantium. Ex adipisci et doloremque autem quia quam. Quis eos molestiae at iure impedit.',
    href: '#',
    increase: true,
  },
]

export default function Stats() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Write emails that sell.
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in
            accusamus quisquam.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-16 lg:mt-16 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="text-xl font-semibold leading-7 text-gray-900">
                  {feature.name}
                </dt>
                <dt className="flex items-center space-x-5 font-bold text-5xl my-5">
                    <h1>5x</h1>
                    {feature.increase ? <FiTrendingUp /> : <FiTrendingDown />}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                    <a href={feature.href} className="text-base font-semibold leading-7 text-primary">
                      Get started <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
