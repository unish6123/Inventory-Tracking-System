import React from 'react'
import Navout from './components/navout'
import Advert from './components/advert'
import Heading from './components/heading'
import Offers from './components/offers'

export default function LandingPage() {
  return (
    <div className='flex flex-col'>
    <Navout/>
    <div className='flex items-center justify-center'>
    <Advert />
    </div>
    <Heading head = 'Make your shopping easy'/>
    <div className='flex items-center justify-center m-2 gap-4'>
    <Offers photo='./src/assets/pictures/pizza.jpeg' offer='diwali special' details='get 20% discount in this diwali'/>
    <Offers photo='./src/assets/pictures/pizza.jpeg' offer='diwali special' details='get 20% discount in this diwali'/>
    <Offers photo='./src/assets/pictures/pizza.jpeg' offer='diwali special' details='get 20% discount in this diwali'/>
    <Offers photo='./src/assets/pictures/pizza.jpeg' offer='diwali special' details='get 20% discount in this diwali'/>
    <Offers photo='./src/assets/pictures/pizza.jpeg' offer='diwali special' details='get 20% discount in this diwali'/>
    <Offers photo='./src/assets/pictures/pizza.jpeg' offer='diwali special' details='get 20% discount in this diwali'/>
    </div>
    </div>
  )
}