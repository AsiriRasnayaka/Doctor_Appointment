import React from 'react'
import Hero from '../components/Hero'
import HealthSpecialities from '../components/HealthSpecialities'
import Mission from '../components/Mission'
import Featured from '../components/Featured'
import HowItWorks from '../components/HowItWorks'
import WhyChooseUs from '../components/WhyChooseUs'
import OurDoctors from '../components/OurDoctors'
import Testimonial from '../components/Testimonial'
import Gallery from '../components/Gallery'

const Home = () => {
  return (
    <div>
      <Hero />
      <HealthSpecialities />
      <Mission />
      <Featured />
      <HowItWorks />
      <WhyChooseUs />
      <OurDoctors />
      <Testimonial />
      <Gallery />
    </div>
  )
}

export default Home