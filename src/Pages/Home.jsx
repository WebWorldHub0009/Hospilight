import React from 'react'
import JainJewelsSlider from '../Components/Hero'
import WhyChooseHospilight from '../Components/WhyChooseUs'
import HealthServiceHero from '../Components/About'
import OurTeam from '../Components/OurTeam'
import Service from '../Components/ServiceSection'
import WhatMakesUsSuperior from '../Components/WhatMakesUsSuperior'
import FeaturedProductSlider from '../Components/FeaturedProductSlider'

const Home = () => {
  return (
    <>
    <JainJewelsSlider/>
    <HealthServiceHero/>
    <WhyChooseHospilight/>
    <Service/>
    <FeaturedProductSlider/>
   <WhatMakesUsSuperior/>

    </>
  )
}

export default Home