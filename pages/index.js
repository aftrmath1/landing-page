import Header from '../components/Header'
import Hero from '../components/Home/Hero'
import Feature from '../components/Home/Feature'
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import Stats from '../components/Home/Stats'
import Testimonials from '../components/Home/Testimonials'
import Footer from '../components/Footer'
import FAQs from '../components/Home/FAQs'
import JoinForm from '../components/Home/JoinForm'


const features = [
  {
    name: 'Access 10,000+ leads within your target market',
    description:
      'Not only do we have thousands of verified leads, we have the intelligence on whom you should reach out to. Filter down by industry, job title, company size, and more.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Eliminate writer\'s block with AI generated personalized messages',
    description: 'Sales reps can create more personalized and relevant messages that are tailored to the specific needs and interests of your prospects.  It can generate these messages for 1000’s of prospects, at once. ',
    icon: LockClosedIcon,
  },
  {
    name: 'Infinitely scale your outreach with email warmups & unlimited sending',
    description: 'Reach your prospects\' inboxes with unlimited warmup and email sending from within the Pipeline platform.',
    icon: ServerIcon,
  },
]

export default function Home() {
  return (
    <main className="bg-primary">
      <Header />
      <Hero />
      {features.map((feature, index) => (
        <Feature
          key={index}
          step={`Step ${index + 1} [Coming soon]`}
          title={feature.name}
          description={feature.description}
          image="https://tailwindui.com/img/component-images/project-app-screenshot.png"
          alternate={index % 2 === 0}
        />
      ))}
      <Stats />
      <Testimonials />
      <FAQs/>
      <Footer />
    </main>
  )
}
