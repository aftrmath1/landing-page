import React from 'react'
import Header from '../components/Header'
import Hero from '../components/About/Hero'
import Vision from '../components/About/Vision'
import AboutCard from '../components/About/AboutCard'
import SectionHeading from '../components/SectionHeading'

const About = () => {
  return (
    <div className="bg-white">
      <SectionHeading title="About Pipeline AI" />
      <AboutCard />
      {/* <Hero /> */}
      {/* <Vision /> */}
    </div>
  )
}

export default About