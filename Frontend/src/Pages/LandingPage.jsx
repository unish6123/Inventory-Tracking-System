import React,{useState} from 'react'
import Navout from './components/navout'
import Advert from './components/advert'
import Heading from './components/heading'
import Offers from './components/offers'
import Weekly from './components/weekly'
import WeeklyadContainer from './components/WeeklyadContainer'
import Grilling from './components/Grilling'

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
    <Weekly />
    <div className='ml-80 mb-8'>
    <WeeklyadContainer />
    </div>
    <Heading head="Let's get grilling" />
    <div className='flex items-center justify-center gap-8 my-4'>
       <Grilling photo='./src/assets/pictures/dessert.jpg' details='eat dessert and be like hazzard'/>
       <Grilling photo='./src/assets/pictures/dessert.jpg' details='eat dessert and be like hazzard'/>
       <Grilling photo='./src/assets/pictures/dessert.jpg' details='eat dessert and be like hazzard'/>
    </div>
      </div>
  )
}