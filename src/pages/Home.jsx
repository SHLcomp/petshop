import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Hero from '../components/hero/Hero'
import PetCollection from '../components/petCollection/PetCollection'
import Services from '../components/services/Services'
import FAQ from '../components/faq/FAQ'
import Quiz from '../components/quiz/Quiz'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <PetCollection />
        <Services />
        <FAQ />
        <Quiz />
    </div>
  )
}

export default Home