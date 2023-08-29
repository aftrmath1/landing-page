import React from 'react'
import Header from '../components/Header'
import PricingBody from '../components/Pricing/Pricing'
import Footer from '../components/Footer'
import SectionHeading from '../components/SectionHeading'

const Pricing = () => {
  return (
    <div>
      <SectionHeading title="Pricing plans for teams of&nbsp;all&nbsp;sizes" subtitle="Choose an affordable plan that’s packed with the best features for engaging your audience, creating customer loyalty, and driving sales."/>
        <PricingBody />
    </div>
  )
}

export default Pricing