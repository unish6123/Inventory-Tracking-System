import React from 'react'
import Navout from './components/navout'
import Footer from './components/Footer'
import InWeeklyprop from './components/Inweeklyprop'
import WeeklyadContainer from './components/WeeklyadContainer'

export default function InWeekly() {
  return (
    <>
    <Navout />
    <InWeeklyprop photo='./src/assets/pictures/momo.jpg' description='The best ever production of the weekly ad' totallb='3.4lb' perlb='$3/lb' price='$11.2'/>
    <WeeklyadContainer />
    <Footer />
    </>
  )
}