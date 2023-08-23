import Hero from '../components/Home/Hero'
import Feature from '../components/Home/Feature'
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import Stats from '../components/Home/Stats'
import Testimonials from '../components/Home/Testimonials'
import LogoCloud from '../components/Home/LogoCloud'
import CTA from '../components/Home/CTA'


const features = [
  {
    name: 'A deep research prospecting tool',
    description: 'Pipeline analyzes CRM data and public information to understand your prospects\' buying habits. Based on their social media, LinkedIn activity, and news sources, we offer insights for crafting compelling, personalized emails.',
    icon: LockClosedIcon,
    image: "/featureprimary.svg",
  },
  {
    name: 'Eliminate writer\'s block with AI generated personalised messages',
    description:
      'Pipeline understands your prospects and can translate your unique value proposition into messaging that resonates with each individual buyer.   It can generate these messages for 1000\’s of prospects, at once.',
    icon: CloudArrowUpIcon,
    image: "/featuresecondary.png",
  },
  {
    name: 'Infinitely scale your outreach across multiple channels.',
    description: 'No need to get lost in the web browser tabs anymore.  You can send LinkedIn InMail messages or emails to distribute your personalised messages from within the pipeline platform.',
    icon: ServerIcon,
    image: "/featuretertiary.png"
  },
]

export default function Home() {
  return (
    <main className="bg-white">
      <Hero />
      <LogoCloud/>
      {features.map((feature, index) => (
        <Feature
          key={index}
          title={feature.name}
          description={feature.description}
          image={feature.image}
          alternate={index % 2 === 0}
        />
      ))}
      <Stats />
      <Testimonials />
      <CTA/>
    </main>
  )
}
