import Hero from '../components/Home/Hero'
import Feature from '../components/Home/Feature'
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import Stats from '../components/Home/Stats'
import Testimonials from '../components/Home/Testimonials'
import LogoCloud from '../components/Home/LogoCloud'
import CTA from '../components/Home/CTA'


const features = [
  {
    name: 'Bringing insights about your prospects to the forefront when you\’re reviewing emails',
    description: 'Pipeline learns about your prospects & their buying habits from your CRM data & publicly available information. We then bring it to your attention and you can decide whether or not to include the insights into your messages.  Using their social media profile, linkedin engagement, press releases & other news to create attention grabbing & personal emails. ',
    icon: LockClosedIcon,
    image: "/featuretertiary.svg",
  },
  {
    name: 'Eliminate writer\'s block with AI generated personalised messages',
    description:
      'Pipeline will create more personalised and relevant messages that are tailored to the specific needs and interests of your prospects.   Pipeline understands your prospects and can translate your unique value proposition into messaging that resonates with each individual buyer.   It can generate these messages for 1000\’s of prospects, at once.',
    icon: CloudArrowUpIcon,
    image: "/featureprimary.png",
  },
  {
    name: 'Infinitely scale your outreach with unlimited sending via Linkedin & Email. ',
    description: 'No need to get lost in the web browser tabs anymore.  You can send LinkedIn InMail messages or emails to distribute your personalised messages from within the pipeline platform.',
    icon: ServerIcon,
    image: "/featuresecondary.svg"
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
