import { InboxIcon, TrashIcon, UsersIcon } from '@heroicons/react/24/outline'
import { FiTrendingDown, FiTrendingUp } from 'react-icons/fi'

const features = [
  {
    name: 'Composition Time',
    value: 10,
    description:
      'Non quo aperiam repellendus quas est est. Eos aut dolore aut ut sit nesciunt. Ex tempora quia. Sit nobis consequatur dolores incidunt.',
    href: '#',
    increase: false,
  },
  {
    name: 'Reply Rate',
    value: 3,
    description:
      'Vero eum voluptatem aliquid nostrum voluptatem. Vitae esse natus. Earum nihil deserunt eos quasi cupiditate. A inventore et molestiae natus.',
    href: '#',
    increase: true,
  },
  {
    name: 'Sales Rate',
    value: 8,
    description:
      'Et quod quaerat dolorem quaerat architecto aliquam accusantium. Ex adipisci et doloremque autem quia quam. Quis eos molestiae at iure impedit.',
    href: '#',
    increase: true,
  },
]

export default function Stats() {
  return (
    <div className="py-24 sm:py-32 max-w-7xl mx-auto">
      <div className="">
        <div className="">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Write emails that sell.
          </h2>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-16 lg:mt-16 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="text-xl font-semibold leading-7 text-gray-900">
                  {feature.name}
                </dt>
                <div className="mt-1 flex items-center space-x-5">
                  <h1 className="text-5xl font-bold text-primary">{feature.value}x</h1>
                  {feature.increase ? (
                    <FiTrendingUp className="text-indigo-700 text-4xl" />
                  ) : (
                    <FiTrendingDown className="text-red-500 text-4xl" />
                  )}
                </div>
                <dd className="mt-5 text-base leading-7 text-accent">
                  <p>{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}